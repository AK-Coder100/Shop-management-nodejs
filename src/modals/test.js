const mongoose = require('mongoose')

const catSchema = { name: String }

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat