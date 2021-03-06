const bookshelf = require('../config/bookshelf');
const Status = require('./status');
const OrdProd = require('./orders_products');

const Order = bookshelf.Model.extend(
    {
        tableName: 'orders',
        status() {
            return this.belongsTo(Status.model)
        },
        products() {
            return this.hasMany(OrdProd.model)
        }
    }
);

module.exports.module = Order;

module.exports.getAll = () => {
    return Order.fetchAll({
        withRelated: ['status', 'products.product']
    });
};

module.exports.getAllByStatus = (id) => {
    return Order.where('status_id', id).fetchAll({
        withRelated: ['status', 'products.product']
    });
};

module.exports.getById = (id) => {
    return new Order({'id':id}).fetch({
        withRelated: ['status', 'products.product']
    });
};

module.exports.findById = (id) => {
    return Order.where({"id":id}).count()
}


module.exports.create = (order) => {
    return new Order({
        id: order.id,
        date_conf: order.date_conf,
        status_id: order.status_id,
        username: order.username,
        email: order.email,
        phone: order.phone
    }).save({}, {"method": "insert"});
};

module.exports.update = (order) => {
    return new Order({
        id: order.id
    }).save( {
            status_id: order.status
        },
        {patch: true, method: "update"}
    );
};
