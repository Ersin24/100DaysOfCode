function getProducts(req, res) {
    res.render('admin/products/all-products')
}

function getNewProducts(req, res) {
    res.render('admin/products/new-product')
}

function createNewProduct(req, res) {
    console.log(req.body)
    console.log(req.file)

    res.redirect('/admin/products')
}



module.exports = {
    getProducts: getProducts,
    getNewProducts: getNewProducts,
    createNewProduct: createNewProduct,
}