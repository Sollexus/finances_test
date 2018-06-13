This project is AE fullstack test task implemented using node.js + react.js

## Table of Contents

- [Running the project](#running-the-project)
- [Adding transactions](#adding-transactions)

## Running the project

In the project directory, you can run:

### `npm start`

It will start node.js server and react.js client app with a list of transactions and current balance

Opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Adding transactions

To add a transaction, make a POST request to http://localhost:3001/transactions endpoint with the body like:

{
  "type" : "debit",
  "amount" : "5",
  "date" : "2010-10-10"
}