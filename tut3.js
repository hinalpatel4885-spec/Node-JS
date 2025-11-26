<<<<<<< HEAD
const http=require("http");
const fs=require("fs");
const { create } = require("domain");
let read=fs.readFileSync("index.html");


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end(read)
});

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 8000");
});
=======
const http=require("http");
const fs=require("fs");
const { create } = require("domain");
let read=fs.readFileSync("index.html");


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end(read)
});

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 8000");
});
>>>>>>> 5f3300a (Initial commit)
