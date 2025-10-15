const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,default:''},
    stamp:{type:String},
    background:{type:String}
},{timestamps:true});

module.exports = mongoose.model('Note',noteSchema);