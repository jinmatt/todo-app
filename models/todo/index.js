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
});

const Todo = mongoose.model('Todo', todoSchema);

/**
 * @method addToList
 */
exports.addToList = function (todoItem, doneStatus, callback) {
  let todo = new Todo({
    todo: todoItem,
    done: doneStatus,
  });

  todo.save(function (err) {
    if (err) {
      callback(err);
    } else {
      callback(err, todo);
    }
  });
};
