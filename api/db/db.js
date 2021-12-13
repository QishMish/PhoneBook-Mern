const mongoose = require('mongoose');

const conectionToMongo =(url)=>{
    return mongoose
            .connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useCreateIndex:true,
                // useFindAndModify:false
                }).then(()=>{
                    console.log("MongoDb connected")
                }).catch((err)=>{
                    console.log(err)
                });

}

module.exports = conectionToMongo;