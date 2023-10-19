let mongoose = require('mongoose');
let schema = mongoose.Schema;

let abstractSchema = new schema({
    email:String,
    firstName:String,
    lastName:String,
    title:String
})

let Abstract = mongoose.model("Abstract",abstractSchema);

module.exports = Abstract;