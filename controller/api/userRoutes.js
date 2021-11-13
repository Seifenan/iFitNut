const router = require('express').Router();

router.post('/', async (req, res)=>{
	//this route is used to add a new user in the db
});

router.post('/login', async (req, res)=>{
	//this route has to find the user and check against the username and make sure the password matches
})

module.exports = router;