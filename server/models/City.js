
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    picture: String
})

const City = mongoose.model("city", citySchema)

module.exports = City