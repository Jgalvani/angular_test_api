var moment = require('moment');

var db = require('../db/angular_test_db.js');

exports.list = function (req, res) {
    db.getConnection(
        function (err, connection) {
            if (!err) {
                connection.query("SELECT * FROM users",
                    function (err, rows) {
                        if(!err) {
                            res.json(rows)
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

exports.add = function (req, res) {
    db.getConnection(
        function (err, connection) {
            if (!err) {
                items = [];
                if (req.body !== undefined) {
                    for (var i = 0; i < req.body.length; i++) {
                        items.push([
                            req.body[i]['email'], 
                            req.body[i]['password'],
                            req.body[i]['firstname'],
                            req.body[i]['lastname'],
                            req.body[i]['drink']
                        ])};
                    connection.query(`INSERT INTO users
                                    (email, password, firstname, lastname, drink)
                                VALUES
                                    ?
                                ON DUPLICATE KEY UPDATE
                                email = VALUES(email),
                                password = VALUES(password),
                                firstname = VALUES(firstname),
                                lastname = VALUES(lastname)`, [items],
                        function (err, rows) {
                            if(!err) {
                                res.json("Insert into table users succeeded !")
                            } else {
                                res.status(500).json({ success: false });
                                console.error("[" + moment().format("YYYY-MM-DD HH:mm") + "]", err);
                            }
                        });
                } else {
                    console.log('Request body is empty')
                }
            } else {
                res.status(500).json({ success: false });
                console.error("[" + moment().format("YYYY-MM-DD HH:mm") + "]", err);
            }
            connection.release();
        });
};

exports.del = function (req, res) {
    db.getConnection(
        function (err, connection) {
            if (!err) {
                if (req.body) {
			        name = req.body['name'];
                    connection.query(`DELETE FROM users where email = ?`, [email],
                        function (err, rows) {
                            if(!err) {
                                res.json("Insert into table users succeeded !")
                            } else {
                                res.status(500).json({ success: false });
                                console.error("[" + moment().format("YYYY-MM-DD HH:mm") + "]", err);
                            }
                    });
                } else {
                    console.log('Request body is empty');
                }
            } else {
                res.status(500).json({ success: false });
                console.error("[" + moment().format("YYYY-MM-DD HH:mm") + "]", err);
            }
            connection.release();
        });
};
