const mongoose = require('mongoose')
const {Schema , model} = mongoose;

const contactSchema = new Schema({
    name:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    phone:String
})
const contact = model("contacts",contactSchema)
module.exports = contact