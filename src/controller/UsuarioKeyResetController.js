const Keyreset = require('../models/keyreset_usuario');

module.exports = {
    async index( req, res ){
        const {id_cpf} = req.query;
        const keyreset = await Keyreset.findOne({ where:{id_cpf}});
        return res.json(keyreset);
    },

    async store(req, res){
        const {id_cpf, passwordToken, passwordTokenExpires} = req.body;
        const keyreset = await Keyreset.create({id_cpf, passwordToken, passwordTokenExpires});

        return res.json(keyreset);
    }
};


