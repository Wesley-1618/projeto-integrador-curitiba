const Simulacao = require('../models/simulacao_emprestimo');

module.exports = {
    async store( req, res){
        const {cpf_usuario,financeira,renda_mensal,valor_emprestimo,tarifa,parcelas,cet,iof,valor_total} = req.body;

        const simulacao = await Simulacao.create({cpf_usuario,financeira,renda_mensal,valor_emprestimo,tarifa,parcelas,cet,iof,valor_total});

        return res.json(simulacao);
    }
};