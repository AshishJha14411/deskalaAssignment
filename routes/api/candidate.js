const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../modal/User");
const auth = require("../../middleware/auth");
const Profile = require("../../modal/Candidate");
router.post(
  "/",
  auth,
  [
    check("name", "Name is required").notEmpty(),
    check("dateOfBirth", "Date of Birth is required").notEmpty(),
    check("age", "Age is required").notEmpty(),
    check("address", "Address is required").notEmpty(),
    check("pin", "PinCode is required").notEmpty(),
    check("state", "State is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, dateOfBirth, age, address, pin, state, ...rest } = req.body;
    try {
      let profile = await Profile.findOneAndUpdate({
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      });
      profile = new Profile({
        name,
        dateOfBirth,
        age,
        address,
        pin,
        state,
        ...rest,
      });

      await profile.save();
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Servera Error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    Profile.findByIdAndDelete(id, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Succes", data);
      }
    });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
