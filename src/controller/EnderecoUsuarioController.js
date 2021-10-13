const Endereco = require('../models/endereco_usuario');

module.exports = {
    async index(req , res){
        const {id_cpf} = req.body;

        const endereco = await Endereco.findOne({ where: {id_cpf}});

        return res.json(endereco);
    },

    async store(req, res){
        const{ id_cpf,uf,cidade,bairro,tipo_logradouro,logradouro,numero,complemento,cep } = req.body;
        
        const endereco = await Endereco.create({ id_cpf,uf,cidade,bairro,tipo_logradouro,logradouro,numero,complemento,cep });

        return res.json(endereco);
    }
};


