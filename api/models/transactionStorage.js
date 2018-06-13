var history = [];
var balance = 0;

module.exports =  {
  add : function(transaction) {
    history.push({
      id : history.length == 0 ? 1 : history[history.length - 1].id + 1,
      amount : transaction.amount,
      date : transaction.date,
      type : transaction.type
    });
    balance = balance + transaction.amount * (transaction.type == 'credit' ? 1 : -1);
  },
  getAll : function() {
    return {
      history : history,
      balance : balance
    }
  },
  get : function(id) {
    return history.find(t => t.id == id);
  },
  getBalance : function() { return balance; }
};