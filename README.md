# Api hospedada no Heroku para suprir as necessidades da aplicação do Projeto Integrador 🎓

-👨‍💻 por Wesley Oliveira


## 🎯 ROUTES DA API

### Loja
<div>
  <p>-/loja/all (GET)</p>
  <p>-/loja/dadoBancario (POST)</p>
  <p>-/loja/dadoBancario?id_cnpj=.. (GET)</p>
  <p>-/loja (POST)</p>
  <p>-/loja (GET)</p>
  <p>-/loja/razao_social?razao_social=.. (GET)</p>
  <p>-/loja/endereco (POST)</p>
  <p>-/loja/endereco (GET)</p>
</div>

### Usuario
<div>
  <p>-/usuario/keyreset (GET)</p>
  <p>-/usuario/all (GET)</p>
  <p>-/usuario/endereco (POST)</p>
  <p>-/usuario/endereco (GET)</p>
  <p>-/usuario (POST)</p>
  <p>-/usuario?cpf_usuario=.. (GET)</p>
</div>


### Usuario_Loja
<div>
  <p>-/usuario/loja (POST)</p>
  <p>-/usuario/loja (GET)</p>
</div>


### Authenticate
<div>
  <p>-/auth/token?cpf_usuario=.. (GET)</p>
  <p>-/auth/token/confere?passwordToken=.. (GET)</p>
  <p>-/auth/senha (GET)</p>
</div>

