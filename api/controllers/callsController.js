const Call = require('../models/Call');

exports.registerCall = async(req,res)=>{
    const {targetName, targetPhoneNumber, callerName, time} = req.body;
    const callDoc = await new Call({targetName, targetPhoneNumber, callerName, time });
    try {
        await callDoc.save();
        res.status(200).json('Successfully Recorded Call To The Call List');
    } catch (error) {
        res.status(500).json({status: 'error', message: error.message});
    }
}