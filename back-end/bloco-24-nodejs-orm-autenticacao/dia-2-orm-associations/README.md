## Exercício 24.2

### Objetivo
Nesse exercício será criado uma API que será responsável pela gestão de um sistema de saúde. Nesse sistema terão pacientes, cada um com seu plano. Cada paciente pode ter realizado várias cirurgias, que por sua vez, devem ser listadas e categorizadas. Serão exercitados através desse projeto as seguintes habilidades:

- Criação de `modelos`;
- Relacionar dois modelos com `hasMany`;
- Relacionar dois modelos com `belongsTo`;
- Relacionar dois modelos com `belongsToMany`;
- Através de `associations`, exercitar conceitos de relacionamentos `1:1`, `1:N` e `N:N`;

### Executando o exercício
#### Após clonar o projeto, na raíz do clone, execute os seguintes comandos:
> Para que você seja levado ao diretório do exercício
```cli
cd back-end/bloco-24-nodejs-orm-autenticacao/dia-2-orm-associations
```
> Para instalar as dependências
```cli
npm install
```
> Para compor os containers necessários para a aplicação, contendo as imagens do node:16 e mysql:5.7
```cli
npm run compose
```

#### Quando realizar a conexão com o bando de dados, ele irá ler o arquivo config.json dentro da pasta ./src/database/config onde serão utilizadas as variáveis de ambiente do arquivo .env localizado na raiz do projeto
> Procure não mudar as variáveis de ambiente, mas caso seja necessário lembre-se que os valores dessas variáveis precisam ser exatamente iguais às informações que estão no arquivo `docker-compose.yml`

#### Se tudo ocorrer corretamente, digite o seguinte comando no terminal:
> Esse comando fará com que o node seja iniciado em um terminal bash
```cli
npm run node
```
> Dentro do terminal digite o comando acima e o servidor deverá iniciar
```cli
npm run start
```

#### Divida o terminal e no mesmo bash do container node:dockerized digite os seguintes comandos:
> Esse comando derrubará qualquer banco de dados existente
```cli
npx sequelize-cli db:drop
```
> Isso fará com que o banco de dados seja criado, após esse comando realize a conexão, é recomendado que seja utilizado a extensão Database Client (https://github.com/cweijan/vscode-database-client). Assim que forem passadas as informações que você definiu no arquivo de configuração do sequelize, derivadas do arquivo .env e do docker-compose, a conexão deverá ser realizada com sucesso
```cli
npx sequelize-cli db:create
```
> Esse comando executará as migrations necessárias para que o projeto do exercício seja executado
```cli
npx sequelize-cli db:migrate
```
> Com esse comando a tabela será populada com os dados iniciais estabelecidos pelos seeders
```cli
npx sequelize-cli db:seed:all
```

#### Por fim basta realizar as requisições:

> Para pesquisar todos os pacientes cadastrados:
- Utilize o método `GET` na rota `localhost:3000/patients`;

> Para pesquisar todos os pacientes e seus respectivos planos:
- Utilize o método `GET` na rota `localhost:3000/patients/plans`;

> Para pesquisar todos os pacientes e suas respectivas cirurgias:
- Utilize o método `GET` na rota `localhost:3000/patients/surgeries`;

> Para adicionar um novo paciente:
- Utilize o método `POST` na rota `localhost:3000/patients/`
