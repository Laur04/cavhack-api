var express = require('express');
var router = express.Router();
//var Profile = require('../models').profile
var Profile = require('../mock/profile')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello World')
});

router.get('/profiles', function (req, res) {
  res.send(Profile.findAll())
})

router.get('/profiles/:id', function (req, res) {
  var profile = Profile.findById(req.params.id)
  res.send(profile)
})

router.post('/profiles', function (req, res) {
  var profiles = Profile.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bio: req.body.bio,
    interests: req.body.interests,
    skills: req.body.skills
  })
  res.send(profiles)
})

router.put('/profiles/:id', function(req, res) {
  var profile = Profile.update(req.params.id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bio: req.body.bio,
    interests: req.body.interests,
    skills: req.body.skills
  })
  res.send(profile)
})

router.delete('/profiles/:id', function(req, res) {
  var profiles = Profile.remove(req.params.id)
  res.send(profiles)
})


 
module.exports = router;
