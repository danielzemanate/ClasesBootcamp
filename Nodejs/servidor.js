const http= require('http');
const fs= require("fs");

const server = http.createServer((req,res)=>{
fs.readFile("./index.html", (err,data)=>{
if (err){
    console.log(err);
}
res.end(data);
});
});

server.listen(3000);
