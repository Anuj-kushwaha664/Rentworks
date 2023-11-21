const mongoose = require('mongoose');

main().then(() => { console.log('connected to mongodb'); }).catch((err) => { console.log(err); });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Rentworks");
}

const authSchema = new mongoose.Schema({
    username : {
        type : String,
    },
    password : {
        type : String,
        minLength : 4
    }
})

const auth = mongoose.model('Auth', authSchema);

let userData = [
    {
        username : "Anuj",
        password : "12345"
    },
    {
        username : "Anupam",
        password : "67895"
    },
    {
        username : "BrajBhushan",
        password : "7842"
    },
    {
        username : "Montu",
        password : "25649"
    }
];

auth.insertMany(userData);
