const mongoose = require('mongoose')
const database = require('../database/connection')

//criação da model estudante
const model_Estudante = mongoose.Schema({
    nome:{
        type:String,
        required:['Informe o nome de estudante']
    },
    bi:{
        type:String,
        required:['Informe o nº de identidade']
    },
    genero:{
        type:String,
        required:['informe o genero']
    },
    naturalidade:{
        type:String,
        required:['informe a naturalidade']
    }
},{
    timestamps:true
})

const Model_Estudante = mongoose.model('tbEstudante',model_Estudante)

module.exports=Model_Estudante