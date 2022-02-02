const router = require("express").Router();
const withAuth = require("../util/auth");
const { Exercise, User } = require("../model");

// all these routes have to be behind authenication
router.get('/', withAuth, async (req, res) => {
  try {
    const exerciseDate = await Exercise.findAll({
      limit: 5,
      where: {
        userId: req.session.userId
      },
      include: [User],
      order: [['createdAt', 'DESC']]
    });

    const exercise = exerciseDate.map((data) => data.get({ plain: true }));

    res.render('test', {
      layout: 'dashboard',
      exercise,
    });

  } catch (err) {
    res.redirect('login');
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("exerciseForm", {
    layout: "dashboard",
  });
});

module.exports = router;