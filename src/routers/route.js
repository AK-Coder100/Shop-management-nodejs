const express = require('express');
const routes = new express.Router();

const Cat = require('../modals/test')


routes.get('/', async (req,res) => {
    try {
        console.clear()
        const j = await Cat.find({ name: 'Zildjian' })
        res.status(200).send(j)
        console.log(j)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = routes