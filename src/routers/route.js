const express = require('express');
const routes = new express.Router();

const Cat = require('../models/test')

routes.get('/home', async (req,res) => {
    try {
        console.clear()
        const j = await Cat.find()
        res.status(200).send(j)
        console.log(j)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
routes.get('/help', async (req,res) => {
    try {
        res.status(200).send("Hello World!!")
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = routes