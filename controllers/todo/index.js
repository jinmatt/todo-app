/**
 * Todo API controller
 *
 * @author Jinsu Mathew <jinsu.mails@gmail.com>
 */

// Module dependencies
const mongoose = require(__base + 'db/mongodb');

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
 * @method mongoTest
 */

exports.mongoTest = function (req, res) {
  var Cat = mongoose.model('Cat', { name: String });

  var kitty = new Cat({ name: 'Zildjian' });
  kitty.save(function (err) {
    if (err) {
      res.json(err);
    } else {
      res.send('meow');
    }
  });
};
