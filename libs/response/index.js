/**
 * Response object helper
 *
 * @author Jinsu Mathew <jinsu.mails@gmail.com>
 */

function Payload(success, payload) {
  this.success = success;
  this.response = payload;
}

/**
 * @method send
 * @param {Boolean} success - API response status success true or false
 * @param {Object} payload - API response payload data
 * @param {Object} res - Express res object
 * @todo check wither success data type is boolean or not
 */
exports.send = function (success, payload, res) {
  if (success) {
    res.json(new Payload(true, payload));
  } else {
    res.status(400).json(new Payload(false, payload));
  }
};
