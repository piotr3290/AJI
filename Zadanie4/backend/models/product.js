const bookshelf= require('../config/bookshelf');
const Category = require('./category');
const OrdProd = require('./orders_products');


const Product = bookshelf.Model.extend({
    tableName: 'products',
    category() {
        return this.belongsTo(Category.model)
    },
    orders() {
        return this.hasMany(OrdProd.model)
    }
});

module.exports.module = Product;

module.exports.getAll = () => {
    return Product.forge().fetchAll({
        withRelated: ['category']
    });
};

module.exports.getById = (id) => {
    return new Product({'id':id}).fetch({
        withRelated: ['category']
    });
};

module.exports.getStatus = (id) => {
    return new Product({'id':id}).fetch({
        withRelated: ['category']
    });
};

module.exports.findById = (id) => {
    return Product.where({"id":id}).count()
};

module.exports.create = (product) => {
    return new Product({
        id: product.id,
        name_prod: product.name_prod,
        description_prod: product.description_prod,
        price: product.price,
        weight: product.weight,
        category_id: product.category_id
    }).save();
};

module.exports.update = (product) => {
    return new Product({
        id: product.id
    }).save({
            name_prod: product.name_prod,
            description_prod: product.description_prod,
            price: product.price,
            weight: product.weight,
            category_id: product.category_id
        },
        {patch: true}
    );
};
