const userModel= require("../models/users");
module.exports={
    allUsers :async (req,res)=>{
        try{
            const users=await userModel.find();
            res.send(users);
        }catch(error){
            res.status(500).send({msg : "Ocurrio un error en el servidor"});
        }
    },
    createUser:async(req,res)=>{
        try {
            const usuario = req.body;
            console.log(req.body);
            const user= await userModel.create(usuario);
            res.send(user);
            
        } catch (error) {
            res.status(500).send({msg : "EL USUARIO NO SE PUDO CREAR"});
        }
    },
    updateUser: async(req,res)=>{
        try {
            const {id}=req.body;
            const entrada=req.body;
            const userUpdate= await userModel.findOneAndUpdate({_id: id},entrada);
            res.send(userUpdate);
        } catch (error) {
            res.status(500).send({msg : "EL USUARIO NO SE PUDO ACTUALIZAR"});
  
        }
    },
    eliminarUser: async(req,res)=>{
        try {
            const {id}=req.body;
            const userDelete= await userModel.findByIdAndDelete({_id: id});
            res.send(userDelete);
            
        } catch (error) {
            res.status(500).send({msg : "EL USUARIO NO SE PUDO BORRAR"});
        }
    }
}