const mongo = require("mongoose");

mongo.Promise = global.Promise;

module.exports = {
    connect : async (app)=>{
        await mongo.connect("mongodb://localhost/Bootcamp");
        app.listen(5000,()=>{
            console.log("Conectamos mongo y el servidor nodeJS");
        })
    }
};