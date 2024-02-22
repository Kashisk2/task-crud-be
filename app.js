/**
 * app.js
 * Use `app.js` to run your app.
 * To start the server, run: `node app.js`.
 */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

//all routes
const routes = require("./routes");
let logger = require("morgan");
const app = express();
const httpServer = require("http").createServer(app);

const corsOptions = {
  origin: process.env.ALLOW_ORIGIN,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTION"],
};
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).send({
    working: true,
  });
});
app.use(routes);

httpServer.listen(process.env.PORT, () => {
  console.log(`your application is running on ${process.env.PORT}`);
});
