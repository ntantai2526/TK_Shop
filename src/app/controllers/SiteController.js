const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class  SiteController {

    //GET /
    index(req, res, next){

        Product.find({})
            .then(products => {
                res.render('home', {
                    products: mutipleMongooseToObject(products)
                });
            })
            .catch(next);


    }

    search(req, res){
        res.render('search');
    };

    infor(req, res){
        res.render('infor');
    };


};


module.exports = new SiteController;