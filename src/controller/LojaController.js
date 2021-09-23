const Loja = require('../models/loja');

module.exports = {
    async store(req, res){
        const{ cnpj_loja, status_loja, tipo_loja, inscricao_estadual, inscricao_municipal, ramo_negocio, motivo_aprovacao, percentual_clipse, razao_social, site } = req.body;
        
        const loja = await Loja.create({ cnpj_loja, status_loja, tipo_loja, inscricao_estadual, inscricao_municipal, ramo_negocio, motivo_aprovacao, percentual_clipse, razao_social, site });

        return res.json(loja);
    }
};