const Product = require('../models/product');

exports.getAll = (req, res) => {
    Product.getAll().then(
        function (allProducts) {
            res.json(allProducts);
        }
    );
    //res.json(products);
};

exports.getById = (req, res) => {
    Product.getById(req.params.id).then(
        function (product) {
            res.json(product);
        }
    ).catch(function (error) {
        res.json({error: error})
    })

    //res.json(_.find(products,function(product) { return product.id == req.params.id}));
};

exports.store = (req, res) => {
    const newProduct = Product.create({
        'name_prod': req.body.name_prod,
        'description_prod': req.body.description_prod,
        'price': req.body.price,
        'weight': req.body.weight,
        'category_id': req.body.category_id
    }).then(function () {
        res.json({
            'status': 'saved!',
            'product': newProduct,
        });
    })
        .catch(function (error) {
            res.json({error: error})
        })


};

exports.updateById = (req, res) => {
    Product.update(req.body).then(
        function (product) {
            res.json(product);
        }
    )
        .catch(function (error) {
            res.json({error: error})
        })
};
