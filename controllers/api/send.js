const sendData = require('./nodemailerRoute')
const { Exercise, User } = require("../../model");

const router = require('express').Router();

router.post('/', async (req, res) => {

  const exerciseData = await Exercise.findAll({
    limit: 5,
    where: {
      userId: req.session.userId
    },
    order: [['createdAt', 'DESC']]
  });
  const exercise = exerciseData.map((data) => data.get({ plain: true }));
  const htmlArr = [];

  for (let i = 0; i < exercise.length; i++) {
    const date = exercise[i].date;
    const weight = exercise[i].weight;
    const push = exercise[i].pushups;
    const sit = exercise[i].situps;
    const pull = exercise[i].pullups;
    const run = exercise[i].runtime;

    const html = `
      <li>
      <p>Date: ${date}</p>
      <p>Weight: ${weight} lbs</p>
      <p>Push-Ups: ${push}</p>
      <p>Sit-Ups: ${sit}</p>
      <p>Pull-Ups: ${pull}</p>
      <p>Run Time: ${run} Min</p>
      </li>
      `
    htmlArr.push(html)

  }

  const finalhtml = htmlArr.join('');

  console.log(htmlArr)
  sendData(req.body.to, finalhtml)
  res.json(true)
})

module.exports = router;