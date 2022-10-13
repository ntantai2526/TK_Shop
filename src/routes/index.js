const newsRouter = require('./news');
const productsRouter = require('./products');

const siteRouter = require('./site');



function route(app){
    
    app.use('/news', newsRouter);
    app.use('/products', productsRouter);


    app.use('/', siteRouter);

    
   

}

module.exports = route;
