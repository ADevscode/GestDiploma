const express = require('express')
const router = express.Router()

const controller_estudante = require('../controller/Controleler_Estudante')


router.get('/', controller_estudante.listar_Estudante)
router.post('/estudante/new', controller_estudante.Novo_Registo)

module.exports = router