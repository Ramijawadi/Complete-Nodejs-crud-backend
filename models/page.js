const mongoose = require('mongoose');


const pageSchema = mongoose.Schema({

    title: {

        type: String,
        required: true
    },

    color: {

        type: String,
        required: true
    },
    form: {

        type: String,
        required: true
    },
 


})

const Page = mongoose.model("page", pageSchema)
module.exports = Page;