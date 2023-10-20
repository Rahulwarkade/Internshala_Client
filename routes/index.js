var express = require('express');
var router = express.Router();
var userModel = require('./users.js');
var passport = require('passport');
var localStrategy = require('passport-local');

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res) {
//   res.render('index');
console.log("heelo")
});


router.get('/profile', isLoggedIn,async (req,res)=>{
  var foundUser = await userModel.findOne({username : req.session.passport.user});
  console.log("loged in user");
})
router.post('/register',async (req,res)=>{
  var newUser = new userModel({
    username : req.body.username,
    pic : req.body.pic
  })
  await userModel.register(newUser,req.body.password);

  passport.authenticate('local')(req,res,()=>{
      res.redirect('/profile');
    })
  }) 
router.post('/login',passport.authenticate('local',{
  successRedirect :  '/profile',
  failureRedirect : '/'
}),(req,res)=>{});


router.get('/logout',(req,res,next)=>{
  req.logout((err)=>
  {
    if(err) res.send(err);
    else res.redirect('/');
  })
})


function isLoggedIn(req,res,next)
{
  if(req.isAuthenticated())
  {
    return next();
  }
  else
  {
    res.redirect('/');
  }
}


module.exports = router;