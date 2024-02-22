const validation = require("../utils/validateRequest");

const validateRequestMiddleware = (schemaKey) => (req, res, next) => {
  const validationResult = validation.validateParamsWithJoi(
    req.body,
    schemaKey
  );
  // Check if validation failed
  if (!validationResult.isValid) {
    return res.status(400).send({
      message: `Invalid values in parameters, ${validationResult.message}`,
    });
  }

  next();
};
module.exports = validateRequestMiddleware;
