import express from "express"
import cors from "cors"
import fs from "fs"
import {MongoClient, ServerApiVersion} from "mongodb"
// import firebase from "firebase/compat/app"
// import "firebase/compat/storage"

const app = express()
app.use(express.static("public"))
app.use(cors())
app.use(express.json())

//===============================MONGODB=======================================//

async function startClient() {
    const uri =
        "mongodb+srv://readonly:reading@cluster0.lgzcdji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    })
    client.connect()

    return client
}

async function getAllDocuments() {
    const client = await startClient()
    const database = client.db("blog")

    const result = await database.collection("entries").find({}).toArray()
    client.close()
    return result
}

async function insertDocument(document) {
    const client = await startClient()
    const database = client.db("blog")

    const result = await database.collection("entries").insertOne(document)
    client.close()
    return result
}

app.get("/", (request, response) => {
    response.send("Hi there")
})

app.get("/blog", (request, response) => {
    const blogs = getAllDocuments()
    blogs.then((blogs) => {
        response.send(blogs)
    })
})

app.post("/blog", (request, response) => {
    console.log(request.body)
    insertDocument(request.body).then((result) => {
        response.send(result)
        console.log(result)
    })
})

app.get("/audio", (request, response) => {
    const files = fs.readdirSync("./public/music/")
    response.send(files)
})

app.get("/pictures", (request, response) => {
    try {
        const files = fs.readdirSync("./public/pictures/me/")
        response.send(files)
    } catch (error) {
        console.error("Error reading directory:", error)
        response.status(500).send("Error reading directory")
    }
})

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
