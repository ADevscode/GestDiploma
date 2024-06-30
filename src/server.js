//importação das dependecias
const express = require('express')
const bodyParser =require('body-parser')
const routa_estudante =require('../router/routa_estudante') 
const swaggerUi = require('swagger-ui-express')

const swaggerJson = require('./swagger.json')

const app  = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.set('view engine','ejs')
//rota da documentação
app.use('/api/docs',swaggerUi.serve,swaggerUi.setup(swaggerJson))
//definindo as rotas da aplicação
app.use('/',routa_estudante) 
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