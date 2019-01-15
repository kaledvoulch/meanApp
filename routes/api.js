const mongoose = require('mongoose');
const passport = require('passport');
const config = require('../config/database');
 require('./config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/user");
const Film = require("../models/film");

router.post('/signup', function(req, res) {

    if(!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please pass email and password.'});
    }
    else {
        var newUser = new User ({
            email: req.body.email,
            password: req.body.password
        });

        // Save the user
        newUser.save(function(err) {
            if (err) {
                console.log(err);
                return res.json({success: false, msg: 'Email already exists.'});
            }
            res.json({success: true, msg: 'Successfully created a new user'});
        });
    }
});

module.exports = router;