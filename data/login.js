var moment = require('moment');

var db = require('../db/angular_test_db.js');

exports.signIn = function (req, res) {
    db.getConnection(
        function (err, connection) {
            if (!err) {
                if (req.body !== undefined) {
                    email = req.body['email'],
                    password = req.body['password']
                };
                console.log(email, password);
                connection.query("SELECT * FROM users where email = ? and password = ?", [email, password],
                    function (err, rows) {
                        if(!err) {
                            if (rows.length > 0) {
                                res.json(true);
                            } else {
                                res.json(false);
                            }
                        } else {
                            res.status(500).json({ success: false });
                            console.error("[" + moment().format("YYYY-MM-DD HH:mm") + "]", err);
                        }
                });
            } else {
                res.status(500).json({ success: false });
                console.error("[" + moment().format("YYYY-MM-DD HH:mm") + "]", err);
            }
            connection.release();
        });
};