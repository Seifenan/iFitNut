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
        runtime: req.body.runtime
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});




module.exports = router;