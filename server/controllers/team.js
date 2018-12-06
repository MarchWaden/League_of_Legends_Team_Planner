const express = require('express');
const router  = express.Router();
const Team = require('../models/team');

router.post('/new', async (req, res) => {
  let team = {
    name: req.body.teamName,
    champions: req.body.ids
  }
  let newTeam = await Team.create(team);
  console.log(newTeam);
  res.send("hello!");
})
router.get('/', async (req, res) => {
  console.log('getting teams')
  let teams = await Team.find({});
  console.log(teams)
  res.json(teams);
})
router.delete('/:team', async (req, res) => {
  let deletedTeam = await Team.findByIdAndDelete(req.params.team);
  console.log(deletedTeam);
  res.send('deleted');
})
router.put('/:team', async (req, res) => {
  let updatedTeam = await Team.findByIdAndUpdate(req.params.team,req.body,{new: true});
  res.send(updatedTeam);
})
module.exports = router;
