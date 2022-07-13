## Exercício 24.2

### Objetivo
Nesse exercício será criado uma API que será responsável pela gestão de um sistema de saúde. Nesse sistema terão pacientes, cada um com seu plano. Cada paciente pode ter realizado várias cirurgias, que por sua vez, devem ser listadas e categorizadas. Serão exercitados através desse projeto as seguintes habilidades:

- Criação de `modelos`;
- Relacionar dois modelos com `hasMany`;
- Relacionar dois modelos com `belongsTo`;
- Relacionar dois modelos com `belongsToMany`;
- Através de `associations`, exercitar conceitos de relacionamentos `1:1`, `1:N` e `N:N`;

### Dependências
Antes de realizar a clonagem do projeto, e de poder executar os passos seguintes, é necessário que você tenha instalado alguns programas:

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node Package Manager](https://nodejs.org/en/download/)

Após instalar o Visual Studio Code, instale algumas extensões que serão necessárias:

- [Remote Containers](https://github.com/Microsoft/vscode-remote-release)
- [Database Client](https://github.com/cweijan/vscode-database-client)
- [Thunder Client](https://github.com/rangav/thunder-client-support)

### Configurando
#### Após clonar o projeto, na raíz do clone(`full-stack-exercises-roadmap`), execute os seguintes comandos:
> Para que você seja levado ao diretório do exercício
```cli
cd back-end/bloco-24-nodejs-orm-autenticacao/dia-2-orm-associations
```
> Para instalar as dependências
```cli
npm install
```
> Para compor os containers necessários para a aplicação, contendo as imagens do node:16 e mysql:5.7. Eles poderão ser observados através da extensão `Remote Containers`
```cli
npm run compose
```

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

#### Então prossiga com os comandos:
> Comando que irá gerar o banco de dados para que possa ser realizada a conexão. O sequelize irá ler o arquivo config.js dentro da pasta ./src/database/config onde serão utilizadas as variáveis de ambiente do arquivo .env localizado na raiz do projeto
```cli
npx sequelize-cli db:create
```
#### Depois da criação, a conexão com o bando de dados já pode ser realizada. Através da extensão `Database Client` já mencionada acima, você deverá passar as informações da sua conexão. Essas informações são as mesmas do arquivo .env e portanto do arquivo config.js do sequelize.
> Procure não mudar as variáveis de ambiente, mas caso seja necessário lembre-se que os valores dessas variáveis precisam ser exatamente iguais às informações que estão no arquivo `docker-compose.yml` e precisam ser modificadas antes dos containers serem gerados pelo comando `npm run compose`.

#### Continuando com a preparação do banco de dados, execute os comandos:
> Esse comando executará as migrations necessárias para que o projeto do exercício seja executado
```cli
npx sequelize-cli db:migrate
```
> Com esse comando a tabela será populada com os dados iniciais estabelecidos pelos seeders
```cli
npx sequelize-cli db:seed:all
```

### Executando
Se não houver nenhum erro o banco de dados deverá estar populado nesse momento, com todas as tabelas necessárias. Para realizar as requisições, utilize a extensão `Thunder Client`.

#### Agora com o projeto configurado, basta realizar as requisições:

> Para pesquisar todos os pacientes cadastrados:
- Utilize o método `GET` na rota `localhost:3000/patients`;

> Para pesquisar todos os pacientes e seus respectivos planos:
- Utilize o método `GET` na rota `localhost:3000/patients/plans`;

> Para pesquisar todos os pacientes e suas respectivas cirurgias:
- Utilize o método `GET` na rota `localhost:3000/patients/surgeries`;

> Para adicionar um novo paciente:
- Utilize o método `POST` na rota `localhost:3000/patients/`
