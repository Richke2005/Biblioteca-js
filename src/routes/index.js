const express = require('express')
const rotaLivros = require('./livrosRoutes')
const rotaAutores = require('./autoresRoutes')

function routes(app){
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "curso de node"})
    })

    app.use(
        express.json(),
        rotaLivros, 
        rotaAutores
    )
}

module.exports = routes