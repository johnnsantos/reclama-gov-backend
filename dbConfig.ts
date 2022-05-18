const dbEngine = process.env.DB_ENVIORMENT || "development";
const config = require(`./knexfile.${dbEngine}`);
module.exports = require('knex')(config);