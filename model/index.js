const User = require('./User');
const Exercise = require('./Exercise');

User.hasMany(Exercise);

Exercise.belongsTo(User);

module.exports = { 
  User, 
  Exercise 
};