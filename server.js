// nodejs template created by Riken Maharjan, 
//for SPA, and Mobile client. 

var app = require('express')();
var routes = require('./routes/index')
/*

require('dotenv').config()
var bcrypt = require('bcrypt-nodejs')

*/



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/",routes)




/*CORS
app.use((req, res, next) => {
    "use strict";
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {


        return res.status(200).json({});

    } else {

        next();
    }
});


*/

// app.get('/', (req,res) => {

//    res.send("Hello, I am Riken Maharjan.");

// })



//
app.listen(process.env.PORT || 3000, ()=>{

    console.log("Server is listening on port 3000")
    
    });



 