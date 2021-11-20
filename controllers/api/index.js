const router = require('express').Router();
const userRoutes =  require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes')


router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes)

module.exports = router;