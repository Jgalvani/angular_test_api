var moment = require('moment');

var db = require('../db/angular_test_db.js');

exports.list = function (req, res) {
    db.getConnection(
        function (err, connection) {
            if (!err) {
                connection.query("SELECT * FROM tests",
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
                        items.push([req.body[i]['name'], req.body[i]['status']])
                    }
                    connection.query(`INSERT INTO tests
                                    (name, status)
                                VALUES
                                    ?
                                ON DUPLICATE KEY UPDATE
                                name = VALUES(name),
                                status = VALUES(status)`, [items],
                        function (err, rows) {
                            if(!err) {
                                res.json("Insert into table tests succeeded !")
                                console.log("zefzefergergzef");
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
                    connection.query(`DELETE FROM tests where name = ?`, [name],
                        function (err, rows) {
                            if(!err) {
                                res.json("Insert into table tests succeeded !")
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
