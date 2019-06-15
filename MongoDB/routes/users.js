const userControllers = require("../controllers/users")

module.exports = (app) =>{
    app.get("/",(req,res)=>{
        res.send("Mi servidor en express y mongo");
    })
    app.get("/users",userControllers.allUsers);
    app.post("/usuario",userControllers.createUser);
    app.post("/updateusuario",userControllers.updateUser);
    app.post("/deleteusuario",userControllers.eliminarUser);
}