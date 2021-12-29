/* 
    Determine the current environment where the application code is
    running and stores the value in the env variable. 
    If process.env.NODE_ENV isn't defined, then set the value 
    to development.
 */
const env = process.env.NODE_ENV || "development"

/* 
    Require the database configuration object from the knexfile.js for
    the current environment and stores it in the config variable. For
    example, if env is set to "development", then config will be set to
    the development configuration object from knexfile.js.
 */
const config = require("../../knexfile")

/* 
    Initialize a Knex instance by calling the knex module, passing in
    config as an argument.
 */
const knex = require("knex")(config)

/* 
    Export the Knex instance so the other files can require it.
 */
module.exports = knex


