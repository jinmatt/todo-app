/**
 * Todo API controller
 *
 * @author Jinsu Mathew <jinsu.mails@gmail.com>
 */

// Module dependencies
const _todo = require(__base + 'models/todo');
const Chance = require('chance');

/**
 * Get todo list
 *
 * @method list
 */

exports.list = function (req, res) {
  let resObj = {
    status: true,
    response: {
      list: [{
        todo: 'Create a todo app',
        done: false,
      },
      {
        todo: 'Connect to Mongodb',
        done: false,
      },
    ],
    },
  };
  res.json(resObj);
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
      return res.json(err);
    }

    res.json(todo);
  });
};
