const Simulacao = require('../models/simulacao_emprestimo');

module.exports = {
    async store( req, res){
        const {cpf_usuario,financeira,renda_mensal,valor_emprestimo,tarifa,parcelas,cet,iof,valor_total, data_parcela} = req.body;

        const simulacao = await Simulacao.create({cpf_usuario,financeira,renda_mensal,valor_emprestimo,tarifa,parcelas,cet,iof,valor_total, data_parcela});

        return res.json(simulacao);
    },

    async fetchall ( req, res ){
        const {cpf_usuario} = req.query;

        const simulacao = await Simulacao.findAll({ where : {cpf_usuario}});

        return res.json(simulacao);
    },
    
    async fetchallsimulations ( req, res ){
        const simulacao = await Simulacao.findAll();

        return res.json(simulacao);
    }

};