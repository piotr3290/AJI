const bookshelf= require('../config/bookshelf');
const Product = require('./product');
const Order = require('./order');


const OrdProd = bookshelf.Model.extend({
    tableName: 'orders_products',
    product() {
        return this.belongsTo(Product.module)
    }
});

module.exports.create = (ordprod) => {
    return OrdProd.forge({
        id: ordprod.id,
        product_id: ordprod.product_id,
        order_id: ordprod.order_id.toString(),
        amount: ordprod.amount
    }).save({},{method: "insert"});
};

module.exports.model = OrdProd;
