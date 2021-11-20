const User = require('./User');
const Exercise = require('./Exercise');

// User.hasMany(Exercise,
//   {
//     foreignKey: 'exerciseId',
//   });

Exercise.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = { 
  User, 
  Exercise 
};