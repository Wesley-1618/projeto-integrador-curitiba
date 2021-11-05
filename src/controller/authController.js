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
                const token = crypto.randomBytes(4).toString('hex');
                const datenow =  new Date();
                datenow.setMinutes(datenow.getMinutes()+30);
                
                await KeyReset.create({
                    id_cpf: cpf_usuario,
                    passwordToken: token , 
                    passwordTokenExpires: datenow
                })

                mailer.sendMail({
                    from: "wesley@financeiraEs21.com.br",
                    to: email,
                    subject: "Es-21 Financeira",
                    template: 'recuperacao_senha',
                    context: {token}
                },(err)=>{
                    if(err){
                        res.status(400).send({erro:'Erro no envio do email, verifique e tente novamente!'})
                    }
                    res.send();
                })
            }else{
                const token = crypto.randomBytes(4).toString('hex');
                const datenow =  new Date();
                datenow.setMinutes(datenow.getMinutes()+30);

                await KeyReset.update({
                    passwordToken:token,
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
                    context: {token}
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
                res.send();
            }

        }catch(err){
            res.status(400).send("ERRO");
        }
    }
};