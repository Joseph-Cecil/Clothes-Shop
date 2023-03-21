const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
  });
 
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    
  } catch (err) {
    res.status(500).json(err);
      }
});

//LOGIN

router.post("/login", async ( req, res) => {
  try {

    const user = await User.findOne({userName: req.body.userName});
    !user && res.status(401).json("Wrong credentials");

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET, {expiresIn: "1w"})

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);

    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    Originalpassword !== req.body.password && res.status(401).json("Wrong credentials")


    const {password, ...others} = user._doc;
    res.status(200).json({...others, accessToken})


    res.status(200).json(user);

  } catch (err) {
    
  }
});

module.exports = router;
