const router = require('express').Router();
const { Exercise } = require('../../model');

router.post('/api', (req, res) => {
    Exercise.create({
        id: req.body.id,
        date: req.body.date,
        height: req.body.height,
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