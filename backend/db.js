const mongoose = require("mongoose");

const ConnectToMongo = () => {
    mongoose.connect("mongodb://localhost:27017/next-blog?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", ()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = ConnectToMongo