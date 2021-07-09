# NodejsMySQLRestAPI

## Descrição
Projeto exemplo que mostra como criar uma API REST usando Node.js e o banco de dados MySQL.

## Tecnologias utilizadas
O projeto utiliza as seguintes tecnologias:

* Node.js
* Express
* MySQL Server
* Knex

## Banco de dados
O banco de dados utilizado pelo projeto é constituído de apenas uma tabela chamada Cities.

Antes de iniciar o projeto, deve-se criar um banco de dados MySQL usando os comandos abaixo:

```
mysql> source <path>/cities-mysql-create.sql;
mysql> source <path>/cities-mysql-inserts.sql; 
```

## API REST
Como o objetivo do projeto é mostrar como utilizar o Node.js para criar uma API, foi desenvolvido uma API simples contendo apenas um serviço para retornar dados de uma determinada cidade a partir do seu código. O serviço é acessado usando o link abaixo:

```
http://localhost:8282/cities/id-cidade
```

## Rodando o projeto
Para rodar o projeto:

```
npm i
npm run dev
```

## Histórico de lançamentos

* 1.0.0 (2021-02-22)
    * Primeira versão
