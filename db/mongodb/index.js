/**
 * Mongodb connection and configurations
 */

const debug = require('debug')('todo:server');
const config = require(__base + 'config');
const mongoose = require('mongoose');

// Connect to Mongodb
let mongoUri = `mongodb://${config.db.mongodb.host}:${config.db.mongodb.port}/${config.db.mongodb.db}`;
const _mongoose = mongoose.connect(mongoUri);

// Connection status
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  debug(`Connected to Mongodb at ${config.db.mongodb.host} on port ${config.db.mongodb.port}`);
});

module.exports = _mongoose;
