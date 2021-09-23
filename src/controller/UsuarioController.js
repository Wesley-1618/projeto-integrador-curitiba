const Usuario = require('../models/usuario');

module.exports  = {
    async store(req, res ){
        const {cpf_usuario, nome_contato, estado_usuario, telefone_celular, telefone_comercial, email, senha,  data_nascimento,  data_emissao_documento, data_validade, tipo_documento, numero_documento, orgao_emissor_documento, natural_cidade, cargo} = req.body;

        const usuario = await Usuario.create({cpf_usuario, nome_contato, estado_usuario, telefone_celular, telefone_comercial, email, senha,  data_nascimento,  data_emissao_documento, data_validade, tipo_documento, numero_documento, orgao_emissor_documento, natural_cidade, cargo});

        return res.json(usuario);
    }
}