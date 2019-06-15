const dbjson = require("../db/dbjson");
const db = require("../db/conexionmysql");
module.exports = {
    users: (req, res) => {
        console.log("Get Usuarios");

        db.query("SELECT * FROM users", (error, result, fields) => {
            if (error) {
                res.status(502).send(error)
            }
            res.send(result)
        });

    },
    user: (req, res) => {
        console.log("Uno");
        const { id } = req.params;

        res.send(dbJson[id]);
    },
    createUser: (req, res) => {

        const { nombre, rol } = req.body;
        db.query("INSERT INTO users (id,nombre,rol) VALUES (NULL, ?, ?)", [nombre,rol], (error, result, fields) => {
            if (error) {
                res.status(502).send(error)
            }
            res.send(result)
        }
        );
    },
    updateUser: (req, res) => {
        const { id, nombre, rol } = req.body;
        const sql = `UPDATE users SET nombre = ${db.escape(nombre)} WHERE id= ${db.escape(id)}`;

        db.query(sql, (error, result, fields) => {
            if (error) {
                res.status(502).send(error)
            }
            res.send(result)

        });
    },
    deleteUser: (req, res) => {
        const { id } = req.body;
        const sql = `DELETE FROM users WHERE id = ${db.escape(id)}`
        db.query(sql, (error, result, fields) => {
            if (error) {
                res.status(502).send(error)
            }
            res.send(result)

        });
    }
};
