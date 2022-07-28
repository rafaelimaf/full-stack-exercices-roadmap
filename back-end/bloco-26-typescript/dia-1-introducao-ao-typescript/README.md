# Exercício 26.1

## Objetivo
O primeiro exercício do bloco de Typescripts, é uma forma de apresentação às tipagens do TS e suas configurações inicias, bem como o uso de sua compilação, a favor de um projeto melhor. Durante os exercícios propostos desse dia, foram visitados alguns tópicos:

- Definir o que é a linguagem `TypeScript`;
- Compreender a relação entre a linguagem `TypeScript` e a linguagem `JavaScript`;
- Compreender o que é `Tipagem` (Dicas de tipo);
- Compreender a diferença entre `Compilador` e `Transpilador`;
- Compilar o seu código `TypeScript` em código `JavaScript`;
- Compreender o sistema de tipos do `TypeScript`; e
- Declarar variáveis de `tipos primitivos` do `TypeScript`.

## Dependências
Antes de realizar a clonagem do exercício, e de poder executar os passos seguintes, é necessário que você tenha instalado alguns programas:

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Após instalar o Visual Studio Code, instale algumas extensões que serão necessárias:

- [Remote Containers](https://github.com/Microsoft/vscode-remote-release)

## Configurando
Se você já tiver clonado esse repositório, na raiz do seu clone(`full-stack-exercises-roadmap`), execute os seguintes comandos:

> Para que você seja levado ao diretório do exercício.
```cli
cd back-end/bloco-26-typescript/dia-1-introducao-ao-typescript
```
>Com o Docker e Docker Compose já instalados e configurados em sua máquina, rode o comando abaixo, isso vai fazer com que um container do node na versão 16 seja iniciado. Caso você tenha familiaridade com o docker, você pode modificar o arquivo docker-compose.yml conforme suas necessidades. Caso contrário recomendo apenas que siga as instruções.
```cli
docker-compose up -d // Antes de rodar o comando, certifique-se de que sua porta 3000 não está sendo utilizada
```
>Se tudo ocorrer bem, na extensão Remote Containers do seu Visual Studio Code, será possível ver que o container está rodando. Assim, você poderá se conectar ao container com o comando:
```cli
docker exec -it node-dockerized bash
```
>Dentro da CLI do container, você já pode realizar os comandos do node, comece por:
```cli
npm install // isso irá instalar as dependências para a execução do exercício
```

## Executando
Ótimo, tudo já está completamente configurado se você seguiu os passos corretamente. Para executar a aplicação, alguns comandos foram definidos no arquivo pacakge.json, cada um executará um dos três mini projetos que constam no exercício, são eles:

#### characterBuilder
Um simples arquivo `Typescript` que utiliza um tipo personalizado, para crirar personagens de um RPG, para executá-lo basta rodar o comando abaixo na CLI do container:
```cli
npm run characters // E no terminal serão mostrados todos os personagens criados
```

#### seasonFinder
Um buscador de estações do ano baseado no mês e hemisfério que você se encontra. Basta preencher as perguntas no terminal, após rodar o comando:
```cli
npm run season-finder
```

#### measureConverter
Esse é o mini projeto mais complexo dentre todos os outros deste exercício. Aqui a partir do comando abaixo, você poderá escolher um tipo de conversor de medidas e realizar a conversão de um valor, de uma unidade para outra.
```cli
npm run measure-converter
```

## Tecnologias Utilizadas
#### Para a criação desse exercício

> Linguagens
- [Typescript](https://www.typescriptlang.org/)
- [Javascript](https://www.javascript.com/)

> Frameworks
- [NodeJS](https://nodejs.org/en/)
- [Eslint](https://eslint.org/)

> Ferramentas
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

> Pacotes
- [readline-sync](https://www.npmjs.com/package/readline-sync)
