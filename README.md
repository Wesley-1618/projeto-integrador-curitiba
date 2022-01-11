## Api hospedada no Heroku para suprir as necessidades da aplicação do Projeto Integrador 🎓

-👨‍💻 por Wesley Oliveira

##🎯 ROUTES DA API

*Loja
<div>
  <p>-/loja/all (GET)</p>
  <p>-/loja/dadoBancario (POST)</p>
  <p>-/loja/dadoBancario?id_cnpj=.. (GET)</p>
  <p>-/loja (POST)</p>
  <p>-/loja (GET)</p>
  <p>-/loja/razao_social?razao_social=.. (GET)</p>
  <p>-/loja/endereco (POST)</p>
  <p>-/loja/endereco (GET)</p>
  <p></p>
</div>

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
