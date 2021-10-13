const UsuarioLojaModel = require('../models/usuario_loja');

module.exports = {
    async index(req, res){
        const {cpf_usuario, cnpj_loja} = req.body;

        const usuarioLoja = await UsuarioLojaModel.findOne({where:{cpf_usuario, cnpj_loja}} );

        return res.json(usuarioLoja);
    },

    async store(req, res) {
        const {cpf_usuario,cnpj_loja,perfil,data_hora_cadastro} = req.body;
        
        const usuarioloja = await UsuarioLojaModel.create({cpf_usuario,cnpj_loja,perfil,data_hora_cadastro});

        return res.json(usuarioloja);
    }
}

