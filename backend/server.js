const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exercise = require('./routes/exercise.js')
const user = require('./routes/user.js')

require('dotenv').config()
const app = express()
const port =process.env.PORT || 5000

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})

const connection = mongoose.connection
connection.once('open',()=>{
    console.log('mongoDB connection succesfully');
})

app.use(cors())
app.use(express.json())


app.use('/exercise',exercise)
app.use('/user',user)

app.listen(port,()=>{
    console.log(`listing on port ${port}`);
})