
const usersControllers =require("../controllers/users");
module.exports = (app)=> {
    app.get("/", (req,res)=>{
        res.send("QUE LLEGUEN LAS PRE");
    });
    app.get("/usuarios", usersControllers.users);
    app.get("/usuario/:id", usersControllers.user);
    app.post("/usuario", usersControllers.createUser);
    app.post("/updateusuario",usersControllers.updateUser);
    app.post("/deleteusuario", usersControllers.deleteUser);
}