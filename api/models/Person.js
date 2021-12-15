const mongoose = require('mongoose');


const perosonSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'you must provide name'],
        trim:true,
        maxlenght:[25, "name can't be more than 25 characters"]
    },
    phone_number:{
        type:Number,
        require:[true, 'you must provide phone number'],
        trim:true,
        maxlenght:[25, "name can't be more than 25 characters"],
    }
},
{ timestamps: true }
)

module.exports = mongoose.model("call", perosonSchema);