const ProductController = require('../controllers/product.controller');

module.exports = app =>{
    app.get('/api', ProductController.index)
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products/create', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put("/api/products/update/:id", ProductController.updateOneProduct)
    app.delete("/api/products/delete/:id", ProductController.deleteProduct)
}


