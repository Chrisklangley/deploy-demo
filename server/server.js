const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'))
})

const port = process.env.port || 4005

app.listen(port, () => console.log(` server running on PORT ${port}`))