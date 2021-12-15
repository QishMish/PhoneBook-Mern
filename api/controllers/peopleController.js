const Person = require('../models/Person')
const peopleData = require('../People.json')


exports.Get_People = async(req,res)=>{
    res.status(201).json({})
}
exports.Add_Person = async(req,res)=>{
    res.status(201).json({})
   
}
exports.Edit_Person = async(req,res)=>{
    res.status(201).json({})
   
}
exports.Remove_Person = async(req,res)=>{
    res.status(201).json({})
}
exports.Populate_People = async(req,res)=>{
    try {
        await Person.deleteMany();
        await Person.create(peopleData)
        res.status(201).json({msg:'People Data Saved', peopleData})
    } catch (error) {
        res.status(404).json('something went wrong')
    }
}