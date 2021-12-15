const User = require('../models/User')
const bcrypt = require('bcrypt')


//register user
exports.register = async(req,res)=>{
    const {username, password} = req.body;
    const user = await new User({username, password});
    try {
        await user.save();
        // const accesToken = await user.generateAuthToken();
        // const { password, ...data } = await user._doc;
        // res.cookie('jwt', accesToken, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 }); 
        // res.status(200).json({data, accesToken});
        res.status(200).json("You Successfully Signed Up");

    } catch (error) {
        res.status(500).json({status: 'error', message: error.message});
    }
}

//login
exports.login = async(req,res)=>{
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username: username});
        if(user){
            const validatedPassword = await bcrypt.compare(password,user.password);
            if(validatedPassword ){
                const accesToken = await user.generateAuthToken();
                const { password, _id, ...data } = user._doc;
                res.cookie('jwt', accesToken, {maxAge: 3 * 24 * 60 * 60 * 1000 });
                res.status(200).json({data,accesToken})
            } else{
                  res.status(400).json("wrong password!")
            }
        }else{
            res.status(400).json("wrong username!")
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: error.message});
    }
}

//logout
exports.logOut = async (req,res) => {
    res.clearCookie("jwt").status(200).json({ message: "You successfully logged out" });
}