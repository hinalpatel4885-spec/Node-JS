const express=require("express");
const path=require("path");
const app=express();
const port=80;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));// for serving static files

//PUG SPECIFIC STUFF
app.set('view engine','pug');//set the template engine as pug
app.set('views',path.join(__dirname,'views'));//set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
    const con="This is the best content on the internet so far so use it wisely. ";
    const params={ "title":"PuBg is the best game","content":con};
    res.status(200).render('index.pug', params);

});

// app.get('/demo', (req, res) => {
//   res.render('demo', { title: 'Hey HINAl', message: 'Hello there! Thank you for visiting.' })
// })

// app.get("/",(req,res)=>{
//     res.send("this is my first express with nodejs application");
// });

// app.get("/about",(req,res)=>{
//     res.status(200).send("this is my first about  page with nodejs application");
// });


// app.post("/about",(req,res)=>{
//     res.send("this is my first post reques  page with nodejs application");
// });


// app.get("/this",(req,res)=>{
//     res.status(404).send("this page is not found");
// });


//START THE SERVER
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
});