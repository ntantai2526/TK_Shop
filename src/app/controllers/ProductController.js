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
    
    //GET /products/:id/edit 
    edit(req, res, next){
        Product.findById(req.params.id)
        .then(product => res.render('products/edit', {
            product: mongooseToObject(product)
        }))
        .catch(next);
    }

    //PUT /products/:id
    update(req, res, next){
        Product.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next)
    };

    //DELETE /products/:id
    destroy(req, res, next){
        Product.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ProductController();