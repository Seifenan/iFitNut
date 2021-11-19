const router = require("express").Router();
const withAuth = require("../util/auth");

// all these routes have to be behind authenication

router.get("/", withAuth, (req, res) => {
  try {
    res.render("test", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.redirect("login");
  }
});



module.exports = router;
