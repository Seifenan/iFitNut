const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoute')
const foodRoutes = require('./foodRoute')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/exercise', dashboardRoutes);
router.use('/food', foodRoutes)

module.exports = router;