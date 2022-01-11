## Api hospedada no Heroku para suprir as necessidades da aplicação do Projeto Integrador 🎓

-👨‍💻 por Wesley Oliveira

##🎯 ROUTES DA API

*Loja

-/loja/all (GET)
-/loja/dadoBancario (POST)
-/loja/dadoBancario?id_cnpj=.. (GET)
-/loja (POST)
-/loja (GET)
-/loja/razao_social?razao_social=.. (GET)
-/loja/endereco (POST)
-/loja/endereco (GET)

*Usuario

-/usuario/keyreset (GET)
-/usuario/all (GET)
-/usuario/endereco (POST)
-/usuario/endereco (GET)
-/usuario (POST)
-/usuario?cpf_usuario=.. (GET)

*Usuario_Loja

-/usuario/loja (POST)
-/usuario/loja (GET)

*Authenticate

-/auth/token?cpf_usuario=.. (GET)
-/auth/token/confere?passwordToken=.. (GET)
-/auth/senha (GET)
