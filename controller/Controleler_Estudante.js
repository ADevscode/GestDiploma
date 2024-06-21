const model_Estudante = require('../model/Estudante')


//contruindo as funções asyncronas

//listar dados de estudantes
const listar_Estudante = async (req,res,erro)=>{
    await model_Estudante.find({}).then(lista=>{
    res.render('home',{Lista:lista})
    });
}

//cadastrar novo estudante
const Novo_Registo = async (req,res,erro)=>{
    try {

        const novo = await model_Estudante.create({
            nome:req.body.nome,
            bi:req.body.bi,
            genero:req.body.genero,
            naturalidade:req.body.naturalidade 
        })
        res.status(200).json({novo}) 

    } catch (error) {

        res.status(500).json({
            mesage:' Não foi possivel salvar um novo Registo '+error
        })
        
    }
}

module.exports= {
    listar_Estudante,
    Novo_Registo
}
