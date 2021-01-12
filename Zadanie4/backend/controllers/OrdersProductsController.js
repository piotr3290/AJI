const OrderProduct = require('../models/orders_products');
const UUID = require('uuid/v1');
exports.store = (req, res) => {
    let id = UUID();
    const newOrdProd = OrderProduct.create({
        'id': id,
        'product_id': req.body.product_id,
        'order_id': req.body.order_id,
        'amount': req.body.amount
    }).then(
        function () {
            res.json({
                msg: 'success',
                row: newOrdProd
            })
        }
    )
};
