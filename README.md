## Sobre
O projeto mostra como criar uma API REST usando Node.js e o banco de dados MySQL.

## Tecnologias
As seguintes ferramentas foram utilizadas neste projeto:

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [MySQL](https://www.mysql.com/)
* [Knex](https://knexjs.org/)

## Requisitos
Antes de iniciar você precisar ter o Git, Node.js e o MySQL instalados.

## Iniciando o projeto

### Clonando o projeto
```
$ git clone https://github.com/erosvitor/nodejs-mysql-restapi.git

$ cd nodejs-mysql-restapi
```

### Criando o banco de dados
O banco de dados utilizado pelo projeto é constituído de apenas uma tabela chamada Cities.

Antes de iniciar o projeto, deve-se criar um banco de dados MySQL usando os comandos abaixo:

```
mysql> source <path>/cities-mysql-create.sql;
mysql> source <path>/cities-mysql-inserts.sql; 
```

### Testando o projeto
**Passo 1:** Iniciar a aplicação executando o comando abaixo.
```
$ npm i
$ npm run dev
```

Como o objetivo do projeto é mostrar como utilizar o Node.js para criar uma API, foi desenvolvido uma API simples contendo apenas um serviço para retornar dados de uma determinada cidade a partir do seu código. O serviço é acessado usando o link abaixo:

```
http://localhost:8282/cities/id-cidade
```

## Licença
Este projeto está sob licença do MIT. Para mais detalhes, ver o arquivo LICENSE.

## Histórico de lançamentos

* 1.0.0 (2021-02-22)
    * Primeira versão
