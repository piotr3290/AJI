const bookshelf= require('../config/bookshelf');

const Status = bookshelf.Model.extend({
    tableName: 'statuses'
});

module.exports.getAll = () => {
    return Status.fetchAll();
};

module.exports.model = Status;
