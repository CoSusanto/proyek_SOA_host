/**
 * Test1Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  test: "Hello My Friend",
  test1: "waka",
  test2: function (req, res) {
    return res.send("OK");
  }
};

