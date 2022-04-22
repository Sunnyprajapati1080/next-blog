const express = require("express")
const ConnectToMongo = require("./db")
const app = express()
const blog = require("./blog")
const cors = require("cors")

ConnectToMongo()
app.use(cors())
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await blog.find({})
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

app.listen(8000)