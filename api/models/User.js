const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true, 'you must provide username'],
        trim:true,
        unique: [true, "username already exist"],
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

// generate tokens
userSchema.methods.generateAuthToken = async function (){
    const user = this;
    const accesToken = await jwt.sign({
        id: user._id.toString(),
        username: user.username.toString()
    },
    process.env.SECRET_KEY,
    {
        expiresIn:'2d'
    })
    return accesToken;
}

// hash password
userSchema.pre('save', async function(next){
    let user = this
    try {
        if(user.isModified('passsword')){
            return next()
        }else{
            const hashedPassword = await bcrypt.hash(user.password, 8);
            user.password = hashedPassword;
            return next();
        }
    } catch (err) {
        return next(err)
    }
})


module.exports = mongoose.model("User", userSchema);