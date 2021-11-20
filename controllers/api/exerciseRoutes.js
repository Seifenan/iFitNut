const router = require('express').Router();
const { Exercise, User } = require('../../model');

router.post('/', (req, res) => {
    console.log(req.body)
    Exercise.create({
        date: req.body.date,
        weight: req.body.weight,
        pushups: req.body.pushups,
        situps: req.body.situps,
        pullups: req.body.pullups,
        runtime: req.body.runtime,
        user_id: req.body.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Set up a client side route when stats page loads to this endpoint
router.get('/:user_id', (req,res) => {
const user_id = req.params.user_id
Exercise.findAll({
    where: {
        user_id
    }
}).then(data => {
    res.json(data)
})
})


module.exports = router;