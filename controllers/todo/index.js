/**
 * Todo API controller
 *
 * @author Jinsu Mathew <jinsu.mails@gmail.com>
 */

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
