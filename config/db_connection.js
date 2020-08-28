const mysql = require("mysql");

function getConnection(){

    const mysqlConnection = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "v3kc@NEF",
        database: "db_portal_noticia"
    
    });

    return mysqlConnection;

}

exports.getConnection = getConnection;