const mondoose = require('mongoose')

//estabelecendo a conexão com o banco de dados
const conectionDB = async()=>{
    await mongoose.connect(
        'mongodb+srv://admin:<admin>@dbapidiploma.pngtebz.mongodb.net/?retryWrites=true&w=majority&appName=DBAPIDiploma'
    ).then(()=>{
        console.log('Base de dados conectado com sucesso!')
    }).catch((erro)=>{
        console.log('Falha de conexão com o banco de dado!')
    })
}

module.exports = conectionDB