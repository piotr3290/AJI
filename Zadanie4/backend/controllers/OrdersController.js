const Order = require('../models/order');
const OrderProduct = require('../models/orders_products');
const UUID = require('uuid/v1')
const Product = require('../models/product')

exports.getAll = (req, res) => {
    Order.getAll().then(
        function (allProducts) {
            res.json(allProducts);
        }
    );
    //res.json(products);
};

exports.getAllByStatus = (req, res) => {
    Order.getAllByStatus(req.params.id)
        .then(
            function (orders) {
                res.json(orders)
            }
        )
};

// dziala ale ładnie
exports.store = (req, res) => {
    let id = UUID();
    if(req.body.username == null || req.body.username === '' || req.body.email == null || req.body.email === '' || req.body.phone == null || req.body.phone === ''){
        res.json({msg: "You must fill everything", status: 422})
    }
    if(!/^\d+$/.test(req.body.phone)){
        res.json({msg: "Wrong phone number", status: 422})
    }
    if(!req.body.email.includes('@')){
        res.json({msg: "Wrong email", status: 422})
    }

    const newOrder = Order.create({
        'id': id,
        'date_conf': req.body.date_conf,
        'status_id': req.body.status_id,
        'username': req.body.username,
        'email': req.body.email,
        'phone': req.body.phone
    }).then(function () {
            const promises = [];
            let answer = {'status': 'saved!', 'product': newOrder,}
             for (let product of req.body.products) {
                 Product.findById(product.product_id).then(function (liczonko) {
                     if (liczonko == 0) {
                         //throw new Error("Product with that ID doesn't exist")

                         res.json({"msg":"Product with that ID doesn't exist", "status":404})
                     }
                     if(product.amount <= 0 || !/^\d+$/.test(product.amount)){
                         res.json({"msg":"Amount must be positive number", "status":422})
                     }
                 })
                 let promise = OrderProduct.create({
                     order_id: id,
                     product_id: product.product_id,
                     amount: product.amount
                 });
                 promises.push(promise);

             }
             Promise.all(promises)
                 .then(function () {
                     answer.status2 = 'saved';
                     res.json(answer);
                     }

                 ) .catch(function (error) {
                     answer.error = error.toString();
                     res.json(answer);
             })

        }
    ).catch(function (Error) {
        res.json(error)
    })
};

exports.update = (req, res) => {
    if(Order.findById(req.params.id) === 0){
        res.json({"msg":"Order with that ID doesn't exist", "status":404});
    }
    let params = req.params;
    Order.getById(params.id).then(function (order2) {
        if(order2.toJSON().status_id >= params.status){
            res.json("New status can't be higher than the old one")
        }
        if(!order2.toJSON().status.name_stat.localeCompare('CANCELED')){
            res.json({"msg":"Can't change status of canceled order", "status":422});
        }
        Order.update({id: params.id, status: params.status})
            .then(function (product) {
                    res.json(order2.toJSON());
                }
            ).
        catch(function (error) {
            res.json(error)

        })

    })



};
