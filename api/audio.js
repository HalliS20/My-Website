import {initializeApp} from "@firebase/app"
import {getStorage, ref, listAll, getDownloadURL} from "@firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBXUQo9B5V3oZ2j9nxc7lTex0ezU3BqSvc",
    authDomain: "muser-11dba.firebaseapp.com",
    projectId: "muser-11dba",
    storageBucket: "muser-11dba.appspot.com",
    messagingSenderId: "811128100318",
    appId: "1:811128100318:web:338142903bdbce063ef94f",
    measurementId: "G-Z1R0MTX35Z",
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export default async function audioLister(req, res) {
    const storageRef = ref(storage)
    const audioList = []

    listAll(storageRef)
        .then(async (result) => {
            const promises = result.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef)
                audioList.push({name: itemRef.name, url: url})
            })

            await Promise.all(promises)
            console.log("Audio list:", audioList)
            res.status(200).send(audioList)
        })
        .catch((error) => {
            console.error("Error listing files:", error)
            res.status(500).send({error: "Error listing files"})
        })
}
