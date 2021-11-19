const { route } = require('.');

const router = require('express').Router();

router.get('/', (req, res)=>{
 res.render('home')
});

router.get('/about', (req, res)=>{
 res.render('about')
});

router.get('/contact', (req, res)=>{
res.render('contact')
});
router.get('/exercise', (req,res) => {
    res.render('myStats')
})

router.get('/login', (req, res)=>{
    if(req.session.loggedIn){
        res.redirect('/');
        return
    }

    res.render('login')
});

router.get('/signup', (req, res)=>{
    if(req.session.loggedIn){
        res.redirect('/');
        return
    }

    res.render('signup')
})

module.exports = router;