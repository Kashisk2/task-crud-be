/**
 * taskValidation.js
 * @description :: validate each post and patch request as per taskValidation
 */

const joi = require("joi");

/** validation keys and properties of taskValidation */
exports.schemaKeys = joi
  .object({
    name: joi.string().required(),
    description: joi.string().required(),
    priority: joi.string().required(),
    due_date: joi.string().required(),
  })
  .unknown(true);

/** validation keys and properties of taskValidation for updation */
exports.updateSchemaKeys = joi
  .object({
    name: joi.string().optional(),
    description: joi.string().optional(),
    priority: joi.string().optional(),
    due_date: joi.string().optional(),
  })
  .unknown(true);
