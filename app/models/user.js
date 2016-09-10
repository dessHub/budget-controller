var mongoose = require('mongoose');

module.exports = mongoose.model ('Budget', {
  item : {type : String ,default:""},
  cost : {type : String ,default:""}
});
