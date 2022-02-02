const router = require('express').Router();
const { Exercise, User } = require('../../model');

router.post('/', (req, res) => {
    console.log(req.body)
    const body = req.body
    Exercise.create({
        ...body,
        userId: req.session.userId
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;