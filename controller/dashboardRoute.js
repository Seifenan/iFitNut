const router = require('express').Router();
const withAuth = require('../util/auth')

// all these routes have to be behind authenication

router.get('/', withAuth, (req, res)=>{

});

// router.get('/login', (req, res)=>{

// });

// router.get('/signup', (req, res)=>{
	
// })

module.exports = router;