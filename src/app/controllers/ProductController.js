const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class  ProductController {

    //GET / products/:slug

    show(req, res, next){
        
        // res.send(req.params.slug)
        Product.findOne({ slug: req.params.slug })
            .then(product => 
                res.render('products/show', { product: mongooseToObject(product) })
            )
            .catch(next);
       
    }

 //GET / products/create

    create(req, res, next){
        res.render('products/create');
    }

    //POST / products/store

    store(req, res, next){
        const fromData = req.body;
        const product = new Product(fromData);
        product.save()
            .then(() => res.redirect('/'))
            .catch(err =>{
                
            })

    }
    

};


module.exports = new ProductController;