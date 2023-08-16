const mongoose = require('mongoose');
require("dotenv").config()

const dbUSer = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const connect = () =>{
    mongoose.connect(`mongodb+srv://${dbUSer}:${dbPassword}@node-express.5amaocy.mongodb.net/Alura-node?retryWrites=true&w=majority`);

    const dbConn = mongoose.connection

    dbConn.on("error", console.log.bind(console, "erro de conexaão"))

    dbConn.once("open", () => {
    console.log("Conectado ao banco com sucesso")
    })

}

connect()

module.exports = mongoose
