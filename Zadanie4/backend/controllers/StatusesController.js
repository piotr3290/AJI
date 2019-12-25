const Status = require('../models/status');

exports.getAll = (req, res) => {
    Status.getAll().then(
        function (allStatuses) {
            res.json(allStatuses)
        }
    )
};
