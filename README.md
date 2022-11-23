<h1>Project Car Shop</h1>
<p>Este projeto foi uma avaliação proposta pela escola de programação Trybe, onde fui desafiado a programar uma API Restfull usando as tecnologias a seguir:</p>
<ul>
  <li>Typescript;</li>
  <li>Express;</li>
  <li>Chai;</li>
  <li>Mongoose;</li>
  <li>Dotenv;</li>
</ul>
<p>Também foi utilizados de conceitos como:</p>
<ul>
  <li>Arquitetura de software, MSC;</li>
  <li>SOLID;</li>
  <li>POO;</li>
  <li>Testes orientados a comportamento, BDD(Behavior Driven Development);</li>
<ul>
<h2>Teste você mesmo!</h2>
<p>🐳 Voce vai precisar de utilizar Docker:<br>
Instalando no Windows: https://docs.docker.com/desktop/install/windows-install/; <br>
Instalando em Linux: https://docs.docker.com/desktop/install/linux-install/; <br>
Instalando no MacOS: https://docs.docker.com/desktop/install/mac-install/; <br>

 Com o Docker ja instalado na versão 1.29 ou superior, você precisa rodar o seguinte comando no terminal: <br>
 ```
 docker-compose up -d
 ```
  Sua máquina vai fazer as configuraçoes necessárias para a execução do projeto!<br>
  Execute o comando:
 ```
 docker exec -it car_shop bash
 ```
 Para acessar o terminal do conteiner no modo iterativo, e depois o comando:
 ```
 npm install
 ```
  *Ainda dentro do terminal do container para instalar todas as dependencias
  
  E por fim rode o comando:
  ```
  npm run dev
  ```
  
  Para iniciar a aplicação!
  Pronto, ja podemos testar na pratica!
  Utilizando um API Client como o Thunder client ou Insomnia, voce pode fazer requisiçoes nas seguintes rotas:<br>
  <strong>Cadastrar um carro:</strong>
  ```
  Método http: post
  Link da rota: http://localhost:3001/cars
  corpo da requisição: {
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
  ```
  <strong>Listar todos os carros:</strong>
  ```
  Método http: get
  Link da rota: http://localhost:3001/cars
  ```
  <strong>Listar um carro buscando pelo ID:</strong>
  ```
  Método http: get
  Link da rota: http://localhost:3001/cars/id
  ```
  *O id deve ser substiduido pelo ID retornado na hora de cadastrar um modelo, ou um dos IDs retornados quando listados todos os carros!<br>
  <strong>Atualizar um carro:</strong>
  ```
  Método http: put
  Link da rota: Link da rota: http://localhost:3001/cars/id
  Corpo da requisição:{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
  ```
  *O id deve ser substiduido pelo ID retornado na hora de cadastrar um modelo, ou um dos IDs retornados quando listados todos os carros!<br>
  <strong>Excluir um carro:</strong>
  ```
  Método http: delete
  Link da rota: Link da rota: http://localhost:3001/cars/id
  ```
  *O id deve ser substiduido pelo ID retornado na hora de cadastrar um modelo, ou um dos IDs retornados quando listados todos os carros!<br>
  <strong>Cadastrar uma moto:</strong>
 ```
  Método http: post
  Link da rota: http://localhost:3001/motorcycles
  corpo da requisição: {
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
 ```
 <strong>Listar todas as motos:</strong>
  ```
  Método http: get
  Link da rota: http://localhost:3001/motorcycles
  ```
  <strong>Listar uma moto buscando pelo ID:</strong>
  ```
  Método http: get
  Link da rota: http://localhost:3001/motorcycles/id
  ```
   *O id deve ser substiduido pelo ID retornado na hora de cadastrar um modelo, ou um dos IDs retornados quando listados todas as motos!<br>
  <strong>Atualizar uma moto:</strong>
  ```
  Método http: put
  Link da rota: Link da rota: http://localhost:3001/motorcycles/id
  Corpo da requisição: {
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
  ```
  *O id deve ser substiduido pelo ID retornado na hora de cadastrar um modelo, ou um dos IDs retornados quando listados todas as motos!<br>
  <strong>Excluir uma moto:</strong>
  ```
  Método http: delete
  Link da rota: Link da rota: http://localhost:3001/motorcycles/id
  ```
  *O id deve ser substiduido pelo ID retornado na hora de cadastrar um modelo, ou um dos IDs retornados quando listados todas as motos!<br>
</p>
