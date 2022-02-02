const User = require('./User');
const Exercise = require('./Exercise');

Exercise.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = {
  User,
  Exercise
};