const User = require('./User');
const Exercise = require('./Exercise');

User.hasMany(Exercise, {
    foreignKey: 'id'
  });

module.exports = { User, Exercise };