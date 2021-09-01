const mongoose = require('mongoose')

const QuoteSchema = mongoose.Schema({
    author : {
        type : String,
        required :true
    },
    quote : {
        type : String,
        required :true
    },
    date : {
        type : Date,
        default: Date.now
    }
})


module.exports = mongoose.model('quote',QuoteSchema)