const router = require('express').Router();
const userRoutes =  require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes')


router.use('/user', userRoutes);
router.use('api/exercise', exerciseRoutes)

module.exports = router;