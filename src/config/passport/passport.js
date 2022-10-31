const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const localStorage = require('localStorage')
const passport = require('passport');

/// Load User Model
const User = require('../../app/models/accounts');

module.exports = function(passport){
    passport.use(
        new LocalStrategy(
        {usernameField: 'username'},
        (username,password,done) => {
            User.findOne({username: username})
                .then(user => {
                    if(!user){
                        return done(
                            null,
                            false,
                            {message:"That Username is not registered"}
                            );
                    }
                    //Match password
                    bcrypt.compare(password, user.password,(err,isMatch)=> {
                        if(err) throw err;

                        if(isMatch){
                            return done(null,user);
                        }
                        else{
                            return done(
                            null,false,
                            {message: 'Password incorrect'}
                            );
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user,done) => {
        done(null,user.id)
    });

    passport.deserializeUser((id,done) => {
        User.findById(id,(err,user) =>{
            done(err,user);
        });
    });

};