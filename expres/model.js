const mongoose = require('mongoose');

const name = mongoose.Schema({
    mobileName : {
        type : String,
        required : true,
        },
    id : {
        type : Number,
        required : true,
    },
    
    price : {
        type : Number,
        required : true,
    },
    
    ram : {
        type : Number,
        required : true,
    },
    storage : {
        type : Number,
        required : true,
    }
    

})

module.exports = mongoose.model('name',name)