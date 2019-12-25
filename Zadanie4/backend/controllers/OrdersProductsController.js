const OrderProduct = require('../models/orders_products');

exports.store = (req, res) => {
    const newOrdProd = OrderProduct.create({
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
