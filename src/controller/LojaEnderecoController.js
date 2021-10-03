const Endereco = require('../models/endereco_loja');

module.exports = {
    async store(req, res){
        const{ id_cnpj,uf,cidade,bairro,tipo_logradouro,logradouro,numero,complemento,cep } = req.body;
        
        const endereco = await Endereco.create({ id_cnpj,uf,cidade,bairro,tipo_logradouro,logradouro,numero,complemento,cep });

        return res.json(endereco);
    }
};


