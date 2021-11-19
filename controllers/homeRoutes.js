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

router.get('/login', (req, res)=>{
    if(req.session.loggedIn){
        res.redirect('/');
        return
    }

    res.render('login', {loggedIn: req.session.loggedIn})
});

router.get('/signup', (req, res)=>{
    if(req.session.loggedIn){
        res.redirect('/');
        return
    }

    res.render('signup')
})

module.exports = router;