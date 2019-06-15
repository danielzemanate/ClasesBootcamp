const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password :"daniel123",
    database: "usuarios"
});
connection.connect((error)=> {

if (error){
    console.log("Error en Mysql :" + error.stack);
    return;
}
console.log("estamos conectados en Mysql: " + connection.threadId);

});
module.exports = connection;