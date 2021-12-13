const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true, 'you must provide username'],
        trim:true,
        maxlenght:[50, "username can't be more than 50 characters"],
        trim: true 
    },
    password:{
        type:String,
        required:[true, 'you must provide password'],
        maxlenght:[50, "password can't be more than 50 characters"],
        trim: true 
    }
},
{ timestamps: true }
)

module.exports = mongoose.model("User", userSchema);