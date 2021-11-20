const router = require("express").Router();
const withAuth = require("../util/auth");

// all these routes have to be behind authenication

router.get("/", withAuth, async (req, res) => {
  try {
    // const exerciseData = await Exercise.findAll({
    //   where:{
    //     userId: req.session.userId
    //   }
    // })

    // const daily= exerciseData.map((data)=> data.get({plain: true}))

    res.render("test", { 
      loggedIn: req.session.loggedIn, 
      //daily 
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
