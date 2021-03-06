const { QueryTypes } = require('sequelize');
const Usuario = require('../models/usuario');
const KeyReset = require('../models/keyreset_usuario');
const crypto = require('crypto');
const mailer = require('../email/modules/mailer');

module.exports = {

    async gerar_token( req, res ){
        const { cpf_usuario, email } = req.query;
        try{
            const user = await Usuario.findOne({where : {cpf_usuario, email}}); 
            const token = await KeyReset.findOne({ where : {id_cpf: cpf_usuario}}); 

            if(!user){
                res.status(400).send({error: 'Usuario nao encontrado, tente novamente!'})
            }else if(!token){
                //const token = crypto.randomBytes(10).toString('hex');
                var tokenNew = "";
                for (var x = 0; x<6; x++){
                    tokenNew = tokenNew + crypto.randomInt(10).toString();
                }

                const datenow =  new Date();
                datenow.setMinutes(datenow.getMinutes()+30);
                
                await KeyReset.create({
                    id_cpf: cpf_usuario,
                    passwordToken: tokenNew , 
                    passwordTokenExpires: datenow
                })

                mailer.sendMail({
                    from: "wesley@financeiraEs21.com.br",
                    to: email,
                    subject: "Es-21 Financeira",
                    template: 'recuperacao_senha',
                    context: {tokenNew}
                },(err)=>{
                    if(err){
                        res.status(400).send({erro:'Erro no envio do email, verifique e tente novamente!'})
                    }
                    res.send();
                })
            }else{
                var tokenNew = "";
                for (var x = 0; x<6; x++){
                    tokenNew = tokenNew + crypto.randomInt(10).toString();
                }
                const datenow =  new Date();
                datenow.setMinutes(datenow.getMinutes()+30);

                await KeyReset.update({
                    passwordToken:tokenNew,
                    passwordTokenExpires:datenow,
                },{
                    where: {
                        id_cpf : cpf_usuario
                    }
                })

                mailer.sendMail({
                    from: "wesley@financeiraEs21.com.br",
                    to: email,
                    subject: "Es-21 Financeira",
                    template: 'recuperacao_senha',
                    context: {tokenNew}
                },(err)=>{
                    if(err){
                        res.status(400).send({erro:'Erro no envio do email, verifique e tente novamente!'})
                    }
                    res.send();
                })
            }
            
        }catch(e){
            console.log(e);
            res.status(400).send({error: 'Erro com a recuperacao de senha, tente novamente!'})
        }
    },

    async reset_senha( req, res ){
        const {cpf_usuario,email, passwordToken, senha} = req.query;

        try{
            const user = await Usuario.findOne({ where : {cpf_usuario, email}});
            const userKey = await KeyReset.findOne({ where : {id_cpf : cpf_usuario ,passwordToken }});
            const datenow = new Date();

            if(!user){
                res.status(400).send("Erro, usuario invalido, verifique os dados e tente novamente");
            }else if(!userKey){
                res.status(400).send("Erro, token invalido, tente novamente");
            }else if(datenow> userKey.passwordTokenExpires){
                res.status(400).send("Erro, token expirado, solicite um novo");
            }else{
                const alteracaoPassword = await Usuario.update({senha:senha},{
                    where : {
                        cpf_usuario : cpf_usuario
                    }
                })
                return res.json(alteracaoPassword);
            }

        }catch(err){
            res.status(400).send("ERRO");
        }
    },

    async confere_token ( req, res ){
        const { passwordToken } = req.query;
        const response = await KeyReset.findOne({ where : { passwordToken } });

        if(!response){
            res.status(400).send("token invalido!")
        }else{
            return res.json(response);
        }
    }
};