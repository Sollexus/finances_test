let storage = require('../models/transactionStorage');

function validateTransaction(transaction) {
  return  (transaction.type == 'credit' || transaction.type == 'debit') &&
          transaction.amount > 0;
}

exports.getAll = function(req, res) {
  res.send(storage.getAll());
};

exports.add = function(req, res) {
  var transaction = req.body;
  if (!validateTransaction(transaction))
    res.status(500).send('Bad transaction format');
  else if (transaction.type == 'debit' && storage.getBalance() < transaction.amount)
    res.status(403).send('Balance is too low to make that operation');
  else {
    storage.add(transaction);
    res.sendStatus(200);
  }
};

exports.getById = function(req, res) {
  res.send(storage.get(req.params.id));
};



