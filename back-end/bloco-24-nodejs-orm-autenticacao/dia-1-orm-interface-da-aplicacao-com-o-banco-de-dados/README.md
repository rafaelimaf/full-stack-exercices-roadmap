## Exercício 24.1

### Objetivo
Criar uma API simples, onde será possível criar um livro ou listar todos os livros da base de dados. Utilizar MySQL como banco de dados e Sequelize como ORM. Para a sua realização, foram praticados conceitos de back-end como:

- Configuração do node com `npm init -y`;
- Instalação e utilização de pacotes node para criação da API como: `express`, `nodemon`, `mysql2`, `sequelize`, `sequelize-cli` e `eslint`
- Criação de um arquivo `docker-compose.yml` para utilizar `node.js` e `mysql` como imagens;
- Prática de versionamento de código com `git`;
- Arquitetura de 3 camadas(`controllers`, `services`, `models`);
- Utilização da camada `model` e portanto camada que faz contado com o banco de dados, a partir de uma `ORM`, neste caso o `sequelize`;
- Criação, Leitura, Atualização e Exclusão de dados da API com queries e métodos do prórpio `sequelize`;

### Executando o exercício
#### Para executar a aplicação, basta rodar os seguintes comandos:
```cli
cd back-end/bloco-24-nodejs-orm-autenticacao/dia-1-orm-interface-da-aplicacao-com-o-banco-de-dados 
```
```cli
npm install
```
```cli
docker-compose up -d
```

#### Quando realizar a conexão com o bando de dados, passe as variáveis de ambiente do docker-compose onde:
- HOST=localhost;
- USERNAME=root
- PASSWORD=docker
- PORT=3306
- DATABASE=sequelize_example
> Procure não mudar as variáveis de ambientes

#### Se tudo ocorrer corretamente, digite o seguinte comando no terminal:
```cli
docker exec -it node-dockerized bash
```

#### Na cli do container, digite o comando:
```cli
npm run dev
```
> Caso a porta já esteja em uso, tente o comando `killall node` dentro da cli do container

Nesse momento o servidor será iniciado, utilizando `Insomnia`, `Postman` ou até a extensão `Thunder Client` do `vsCode`, já é possível realizar as requisições com a rota `localhost:3000/books`
