const Order = require('../models/order');
const OrderProduct = require('../models/orders_products');


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

// dziala ale brzydko
exports.store = (req, res) => {
    const newOrder = Order.create({
        'date_conf': req.body.date_conf,
        'status_id': req.body.status_id,
        'username': req.body.username,
        'email': req.body.email,
        'phone': req.body.phone
    }).then(function () {
            for (let product of req.body.products) {
                OrderProduct.create({
                    order_id: product.order_id,
                    product_id: product.product_id,
                    amount: product.amount
                })
            }
            res.json({
                'status': 'saved!',
                'product': newOrder,
            });
        }
    )
};

exports.update = (req, res) => {
    Order.update({id: req.params.id, status: req.params.status}).then(
        function (product) {
            res.json(product);
        }
    )
};
