const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require('config')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../../modal/User");
//post request for register,access public
router.post(
  "/",
  [
    check("email", "Please use valid email address").isEmail(),
    check("phoneNumber", "please enter a valid phone number").isLength({
      min: 10,
      max: 10,
    }),
    check("password", "...").matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/,
      "i"
    ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, phoneNumber, password} = req.body;
    try {
        let user = await User.findOne({email})
        let phone = await User.findOne({phoneNumber})
        if(user || phone) {
            res.status(400).json({errors: [{msg: 'User Already Exists'}]});
        }

        user = new User({
            email,
            phoneNumber,
            password
        });
        //salt to hash it with, more salt more secure
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)

        await user.save()
        
        const payload = {
            user:{
                id: user.id
            }
        }
        
        jwt.sign(payload, config.get('jwtSecret'),
        {
            expiresIn: 360000
        },
        (err, token) => {
            if(err) throw err;
            res.json({token})
        }
        )
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
  }
);

module.exports = router;
