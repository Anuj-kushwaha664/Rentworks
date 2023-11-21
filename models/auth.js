const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username : {
        type : String,
        minLength : 3
    },
    password : {
        type : String,
        minLength : 4
    }
})

const auth = mongoose.model('auth', authSchema);
module.exports = auth;