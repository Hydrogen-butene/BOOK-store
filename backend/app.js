const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/book-routes.js")
const dotenv = require("dotenv")
const cors = require("cors")



const app = express()

dotenv.config({path:"backend/config/config.env"})


//middle ware
app.use(express.json())
app.use(cors())
app.use("/books",router)
console.log(process.env.PORT);
mongoose.connect(process.env.MONOGO_URL)
. then(()=>console.log("connectd to database"))
.then(()=>{
    app.listen(process.env.PORT);
    console.log("server 3001")
}).catch((err)=>console.log(err))

