const Product = require('../models/product');
const UUID = require('uuid/v1');

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

};

exports.store = (req, res) => {
    id = UUID();
    if(req.body.name_prod === '' || req.body.name_prod == null ||
        req.body.description_prod ==='' || req.body.description_prod == null){
        res.json({msg: "You must fill everything", status: 422})
    }

    if(req.body.weight <= 0){
        res.json({msg: "Weight must be a positive number", status: 422})
    }

    if(req.body.price <= 0){
        res.json({msg: "Price must be a positive number", status: 422})
    }

    const newProduct = Product.create({
        'id':id,
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
    if(Product.findById(req.params.id) === 0){
        res.json({"msg":"Product with that ID doesn't exist", "status":404});
    }

    if(req.body.name_prod === '' || req.body.name_prod == null ||
        req.body.description_prod ==='' || req.body.description_prod == null){
        res.json({msg: "You must fill everything", status: 422})
    }

    if(req.body.weight <= 0){
        res.json({msg: "Weight must be a positive number", status: 422})
    }

    if(req.body.price <= 0){
        res.json({msg: "Price must be a positive number", status: 422})
    }
    Product.update(req.body).then(
        function (product) {
            res.json(product);
        }
    )
        .catch(function (error) {
            res.json({error: error})
        })
};
