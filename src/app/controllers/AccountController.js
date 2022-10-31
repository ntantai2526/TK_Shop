const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class  AccountController {

    //GET /account/login
    login(req, res){
        res.render('account/login');
    }
    //GET /account/register
    register(req, res){
        res.render('register');
    }



}


module.exports = new AccountController();