var mysql = require('mysql');

module.exports = function() {
    return {
        init: function() {
            return mysql.createConnection({
                host: 'localhost',
                user: "root",
                password : "1234",
                database: "mydb"
            })
        },

        db_open: function(con) {
            con.connect(function (err) {
                if (err) {
                    console.error('mysql connection error :' + err);
                } else {
                    console.info('mysql is connected successfully.');
                }
            })
        }
    }
}
