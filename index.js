const express = require('express')
const routes = require('./src/routers/route')
require('./src/dbConnect/connect')

const app = express()

app.use(routes)


app.listen('3002', () => {
    console.log("Server has been started")
})