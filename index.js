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

// const firebaseConfig = {
//     apiKey: "AIzaSyBXUQo9B5V3oZ2j9nxc7lTex0ezU3BqSvc",
//     authDomain: "muser-11dba.firebaseapp.com",
//     projectId: "muser-11dba",
//     storageBucket: "muser-11dba.appspot.com",
//     messagingSenderId: "811128100318",
//     appId: "1:811128100318:web:338142903bdbce063ef94f",
//     measurementId: "G-Z1R0MTX35Z",
// }
//
// firebase.initializeApp(firebaseConfig)

/// get request to fetch the audio file from firebase storage
// app.get("/audio", async (req, res) => {
//     const storage = firebase.storage()
//     const storageRef = storage.ref()
//     const audioList = []
//
//     storageRef
//         .listAll()
//         .then(async (result) => {
//             const promises = result.items.map(async (itemRef) => {
//                 const url = await itemRef.getDownloadURL()
//                 audioList.push({name: itemRef.name, url: url})
//             })
//
//             await Promise.all(promises)
//
//             res.status(200).send(audioList)
//         })
//         .catch((error) => {
//             console.error("Error listing files:", error)
//         })
// })
// B0VpnKzXbVONBz7M
// MONGODB

async function startClient() {
    const uri =
        "mongodb+srv://hallist:B0VpnKzXbVONBz7M@cluster0.lgzcdji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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

app.get("/", (request, response) => {
    response.send("Hi there")
})

app.get("/blog", (request, response) => {
    const blogs = getAllDocuments()
    blogs.then((blogs) => {
        response.send(blogs)
    })
})

app.get("/audio", (request, response) => {
    const files = fs.readdirSync("./public/music/")
    response.send(files)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
