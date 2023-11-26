// Import the express module
const express = require('express')
const path = require('path')
// Create an instance of the express application
const app = express()
app.use(express.static('public'));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

// Set up the server to listen on a port (e.g., 3000)
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
