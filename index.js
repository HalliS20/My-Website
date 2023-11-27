require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.static("public"))
app.get("/", (request, response) => {
    response.send("Hi there")
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...")
})
