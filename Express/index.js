const express= require ("express");
const bodyParser = require ("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const routeUsers= require("./routes/user")(app);//pasamos la instancia de express como parametro

app.get("/", (req,res)=>{
    res.send("HOLA");
    console.log("Hola")

});

app.get("/usuario/:id/:name", (req,res)=>{
    const {id} = req.params;
    const parametros =req.params;
    console.log(parametros);
    res.send(parametros);
});

app.post("/usuarios", (req,res)=>{
const datosUsuario = req.body;
console.log(req.body);
res.send(datosUsuario);
});

app.listen(5000, () =>{
    console.log("estoy escuchando")
})