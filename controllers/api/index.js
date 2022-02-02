const router = require('express').Router();
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes')
const sendEmail = require('./send')

router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes)
router.use('/send', sendEmail)

module.exports = router;