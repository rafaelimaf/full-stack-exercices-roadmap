# Exercicio 24.1

## Objetivo
O objetivo desse exercício, foi realizar um simples CRUD com sequelize. Assim a partir da estruturação inicial do sequelize, foram praticados conceitos de back-end como:

- Configuração do node com `npm init -y`;
- Instalação e utilização de pacotes node para criação da API como:
> `express`, `nodemon`, `mysql2`, `sequelize`, `sequelize-cli` e `eslint`
- Criação de um arquivo `docker-compose.yml` para utilizar `node.js` e `mysql` como imagens;
- Prática de versionamento de código com `git`;
- Arquitetura de 3 camadas(`controllers`, `services`, `models`);
- Utilização da camada `model` e portanto camada que faz contado com o banco de dados, a partir de uma `ORM`, neste caso o `sequelize`;
- Criação, Leitura, Atualização e Exclusão de dados da API com queries e métodos do prórpio `sequelize`;

### Executando o exercício
#### Para executar a aplicação, basta rodar os seguintes comandos:
> cd dia-1-orm-interface-da-aplicacao-com-o-banco-de-dados
> npm install
> docker-compose up -d

#### Realize a conexão com o bando de dados, passando as informações do docker-compose, assim:
> Host: localhost
> Username: root
> Password: docker
> Port: 3306
> Database: sequelize_example

#### Se tudo ocorrer corretamente, no terminal digite o comando:
> docker exec -it node-dockerized bash

#### Na cli do container, digite o comando:
> npm run dev

Nesse momento o servidor será iniciado, utilizando `Insomnia`, `Postman` ou até a extensão `Thunder Client` do `vsCode`, já é possível realizar as requisições com a rota `localhost:3000/books`
