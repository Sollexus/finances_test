module.exports = function(app) {
  let controller = require('../controllers/transactionController');

  app.route('/transactions')
    .get(controller.getAll)
    .post(controller.add);


  app.route('/transactions/:id')
    .get(controller.getById)
};