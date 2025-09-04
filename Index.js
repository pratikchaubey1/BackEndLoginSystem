const express = require('express')

const app = express()
require('dotenv').config()

const User = require('./routes/User')
const admin = require('./routes/adminlogin')
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/',(req,res) => {
  res.send('Home page routes ')
})
const todoRoutes = require('./routes/todo')

app.use('/api/v1',todoRoutes)
app.use('/autho',User);
app.use('/admin',admin);

app.listen(port,()=>{
  console.log(`server on listen port no:${port}`);
  
})

const dbconnect = require('./Config/database')
dbconnect()