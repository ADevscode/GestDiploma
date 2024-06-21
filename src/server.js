//importação das dependecias
import express from 'express'
const app  = express()


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