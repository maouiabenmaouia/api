const Contact = require("../model/contact");


exports.postContact = async(req,res)=>{
 try {
    const {name,email} = req.body;

    if(!name || !email){
        return res.status(400).send({msg:"please Enter All fields"})
    }
    const user = await Contact.findOne({email:email})
    if (user){
        return res.status(400).send({msg:"Email Already Exists"})
    }
    const newContact = new Contact({...req.body})
    const  contact = await newContact.save()
    return res.status(201).send({msg:"Aadding Contact Success ",contact})
    
 } catch (error) {
    console.log(error)

    res.status(500).send({msg:"sorry rabi noube "})
 }
}

exports.getcontacts = async(req,res)=>{
    try {
        const contact = await Contact.find({})
        return res.status(200).send({msg:"Geting Contacts  with Suucces",response:contact})

    } catch (error) {
         console.log(error)
         res.status(500).send({msg:"sorry we can not GET contacts "})
    }
}

exports.getContactByID = async(req,res)=>{
    try {
        const {id} = req.params
        const contact = await Contact.findOne({_id:id})
        if (!contact){
        return res.status(400).send({msg:"contact Not Found"})
    }
        return res.status(200).send({msg:"Geting Contact By ID with Suucces",response:contact})

    } catch (error) {
         console.log(error)
         res.status(500).send({msg:"sorry we can not GET contact By ID"})
    }
}
exports.deletecontactById = async(req,res)=>{
    try {
        const {id} = req.params
         await Contact.deleteOne({_id:id})
    
        return res.status(200).send({msg:"Delete Contact By ID with Suucces"})

    } catch (error) {
         console.log(error)
         res.status(500).send({msg:"sorry we can not gettin contact By ID"})
    }
}
  

exports.updateContact = async(req,res)=>{
    try {
        await Contact.updateOne({_id:req.params.id},{$set:{...req.body}})
        res.status(200).send({msg:"Updated contact With success"})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"Can Not Updtec contact"})
    }
}