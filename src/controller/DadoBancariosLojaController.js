const Dados = require('../models/dado_bancario');

module.exports = {
    async index(req, res){
        const { id_cnpj } = req.body;

        const dadosBancarios = await Dados.findOne({ where: {id_cnpj} });

        return res.json(dadosBancarios);
    },

    async store(req, res){
        const{ id_cnpj, nome_banco, codigo_banco, agencia, numero_conta_corrente } = req.body;
        
        const dadosBancarios = await Dados.create({ id_cnpj, nome_banco, codigo_banco, agencia, numero_conta_corrente });

        return res.json(dadosBancarios);
    }
};



