 const mongoose = require('mongoose');
require("dotenv").config()
const dbUSer = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUSer}:${dbPassword}@node-express.5amaocy.mongodb.net/Alura-node?retryWrites=true&w=majority`);

let dbConn = mongoose.connection

module.exports = dbConn;
