const dotenv = require("dotenv");

// Load environment variables from the chosen file
dotenv.config({ path: `.env` });
module.exports = {
  db_api: process.env.DB_URL,
};
