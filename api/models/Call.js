const mongoose = require('mongoose');


const callSchema = new mongoose.Schema({
    targetName:{
        type:String,
        require:[true, 'you must provide targetName'],
        trim:true,
        maxlenght:[25, "targetName can't be more than 25 characters"]
    },
    targetPhoneNumber:{
        type:Number,
        require:[true, 'you must provide targetPhoneNumber phone number'],
        trim:true,
        maxlenght:[25, "targetPhoneNumber can't be more than 25 characters"],
    },
    callerName:{
        type:String,
        require:[true, 'you must provide callerName'],
        trim:true,
        maxlenght:[25, "callerName can't be more than 25 characters"]
    },
    time : { 
        type : Date, 
        default: Date.now 
    }
}
)

module.exports = mongoose.model("call", callSchema);