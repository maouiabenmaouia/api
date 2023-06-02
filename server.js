const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB")
const contactRouter = require("./routes/contactRoutes");
const contact = require("./model/contact");

const app = express();
connectDB();
app.use(express.json());
app.use("/api/contact" , contactRouter)
const PORT = process.env.PORT || 8020;
app.listen(PORT,(err)=>{
    err?
console.log(err):console.log(`server is running on port ${PORT}`)
})