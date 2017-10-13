'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/data')
  	.get(todoList.getData);

  app.route('/data')
    .post(todoList.setData); 
};