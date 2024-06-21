//importação das dependecias
const express = require('express')
const routa_estudante =require('../router/routa_estudante')
const database = require('../database/connection')

const app  = express()
app.use(express.json())

//definindo as rotas da aplicação
app.get('/',(req,res)=>{
    res.send('Bem vindo a routa princiapal')
})


//
const port  = 3001;
app.listen(port,(erro)=>{
    if(!erro){
        return console.log(`servidor rodando na porta ${port}`)
    }
    console.status(503).js({
        message:'Servidor indisponivel'
    })
})