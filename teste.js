const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("./roupas.json"))
const newData = { id: 3, type: "masculino" }

fs.writeFileSync('./roupas.json', JSON.stringify([...dadosAtuais, newData ]))
console.log(dadosAtuais)