const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.get('/styles', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.css'))
})
          const {PORT} =process.env
const port = PORT || 4005

app.listen(port, () => console.log(` server running on PORT ${port}`))