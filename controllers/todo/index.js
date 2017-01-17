/**
 * Todo API controller
 *
 * @author Jinsu Mathew <jinsu.mails@gmail.com>
 */

// Module dependencies
const _todo = require(__base + 'models/todo');
const Chance = require('chance');
const response = require(__base + 'libs/response');

/**
 * Get todo list
 *
 * @method list
 */

exports.list = function (req, res) {
  _todo.getList((err, todos) => {
    if (err) {
      return response.send(false, err, res);
    }

    response.send(true, todos, res);
  });
};

/**
 * Scaffold todo db
 *
 * @method scaffold
 */

exports.scaffold = function (req, res) {
  let chance = new Chance();
  _todo.addToList(chance.sentence({ words: 5 }), chance.bool(), (err, todo) => {
    if (err) {
      return response.send(false, err, res);
    }

    response.send(true, todo, res);
  });
};
