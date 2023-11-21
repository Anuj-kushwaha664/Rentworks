const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Auth = require("./models/auth.js");

// connected to database Rentworks
main().then(()=>{console.log("connected to database");})
.catch((err)=>{console.log(err);});


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Rentworks");
}

// add data to auth database using init.js file






const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})
app.get("/Home", (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, './login.html'));
})

app.post("/login", async(req, res) => {
    let matching =  await Auth.find(req.body);
    if(matching.length > 0) {
        res.sendFile(path.join(__dirname, './Dashboard_setup.html'));    
    }else{
        res.redirect("/login");
    }
});

app.get("/signup", function(req, res){
    res.sendFile(path.join(__dirname, './signup.html')); 
});

app.post("/signup", async(req, res) => {

    let {username, password} = req.body;

    console.log(username + password);

    if(username.length < 4 || password.length < 4){
        console.error("invalid username");
        res.redirect('/login');
    }else{
        let Auth1 = new Auth(req.body);  
         Auth1.save();
         res.sendFile(path.join(__dirname, './Dashboard_setup.html'));
    }
        
})


app.listen(port, function(err){
    if(err){
        console.log(err);
    }

    console.log("listening on port " + port);
})