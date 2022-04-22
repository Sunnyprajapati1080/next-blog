const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    slug:String
})
module.exports = mongoose.model("blog",blogSchema)