const User = require('./User');
const Exercise = require('./Exercise');

User.hasMany(Exercise);

Exercise.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { 
  User, 
  Exercise 
};