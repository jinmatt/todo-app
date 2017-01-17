/**
 * Configuration manager
 *
 * @author: Jinsu Mathew <jinsu.mails@gmail.com>
 */

// Module dependencies
const fs = require('fs');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
var configBuffer = null;

// Init config_buffer according to the NODE_ENV
switch (NODE_ENV) {
  case 'production':
    configBuffer = fs.readFileSync(path.resolve(__dirname, 'production.json'), 'utf-8');
    break;
  case 'staging':
    configBuffer = fs.readFileSync(path.resolve(__dirname, 'staging.json'), 'utf-8');
    break;
  default:
    configBuffer = fs.readFileSync(path.resolve(__dirname, 'default.json'), 'utf-8');
}

var config = JSON.parse(configBuffer);
module.exports = config;
