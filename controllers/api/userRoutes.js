const router = require('express').Router();
const { User } =require('../../model')

router.post('/', async (req, res)=>{
	//this route is used to add a new user in the db
	try {
		const user = await User.create({
			username: req.body.username,
			password: req.body.password
		})

		req.session.save(()=>{
			req.session.userId =  user.id;
			req.session.username = user.username;
			req.session.loggedIn = true;
			
			res.json(user);
		})
		

	} catch(err){
		res.status(500).json(err)
	}
});

router.post('/login', async (req, res)=>{	
	//this route has to find the user and check against the username and make sure the password matches
	try{
		const user = await User.findOne({
			where: {
				username: req.body.username
			}
		})

		if(!user){
			res.status(400).json({message: 'No username found'})
			return;
		}

		const validPassword = user.checkPassword(req.body.password);

		if(!validPassword){
			res.status(400).json({message: 'password incorrect'})
			return;
		}

		req.session.save(()=>{
			req.session.userId =  user.id;
			req.session.username = user.username;
			req.session.loggedIn = true

			res.json({message: 'you logged in'})
		});
		
	}catch(err){
		res.status(500).json(err)
	}
});


router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;