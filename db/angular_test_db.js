var mysql = require('mysql');

if (process.env.CONNECTION_STRING) {
  console.log(CONNECTION_STRING)
  var pool = mysql.createPool(process.env.CONNECTION_STRING);
} else {
  var pool = mysql.createPool({
    connectionLimit : 3,
    host            : 'localhost',
    user            : 'root',
    password        : 'root123',
    database        : 'angular_test',
    timezone        : 'utc',
    dateStrings     : true
  });
}

module.exports = pool;
