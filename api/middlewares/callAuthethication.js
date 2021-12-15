
const verifyCall = (req,res,next) => {
    const {targetName, targetPhoneNumber} = req.body;

    let validator = {
        onlyLetters : /^[A-Za-z]+$/,
        onlyNumbers : /^[0-9]+$/,
    }
    
    if(validateName(targetName,validator) && validatePhoneNumber(targetPhoneNumber,validator)){
        next()
    }else{
        return res.status(401).json('Could Not Verify Phone Number Or Name')
    }
}
//validate name on numbers
const validateName =(name,validator) => {
    var result = validator.onlyLetters.test(name);
    return result;
}
//validate phone on symbols
const validatePhoneNumber =(num,validator) => {
    var result = validator.onlyNumbers.test(num);
    return result;
}


module.exports = { verifyCall };