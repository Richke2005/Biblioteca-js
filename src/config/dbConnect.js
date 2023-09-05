const mongoose = require("mongoose");
require("dotenv").config();

const dbUSER = process.env.DB_USER;
const dbPASS = process.env.DB_PASS;


function connect(){
  mongoose.connect(`mongodb+srv://${dbUSER}:${dbPASS}@node-express.5amaocy.mongodb.net/Alura-node?retryWrites=true&w=majority`);

  const conn = mongoose.connection;

  conn.on("error", err =>{
    console.error(err);
  });

  conn.once("open", () => {
    console.log("connection sucessfull to mongoDB");
  });
}

connect();

module.exports = mongoose;