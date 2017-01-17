/**
 * Todo model
 */

// Module dependencies
const mongoose = require(__base + 'db/mongodb');
const Chance = require('chance');

/* Todo schema */
const todoSchema = mongoose.Schema({
  todo: String,
  done: Boolean,
}, {
  versionKey: false,
});

const Todo = mongoose.model('Todo', todoSchema);

/**
 * @method addToList
 * @param {String} todoItem
 * @param {Boolean} doneStatus
 * @param {Function} callback
 */
exports.addToList = function (todoItem, doneStatus, callback) {
  let todo = new Todo({
    todo: todoItem,
    done: doneStatus,
  });

  todo.save(function (err) {
    if (err) {
      return callback(err);
    }

    callback(null, todo);
  });
};

/**
 * @method getList
 */
exports.getList = function (callback) {
  Todo.find((err, todos) => {
    if (err) {
      return callback(err);
    }

    callback(null, todos);
  });
};
