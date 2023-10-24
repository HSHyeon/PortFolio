const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.static('public'));
app.use(express.static('imgs'));

app.get('',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT, () =>[
    console.log(`서버가 ${process.env.PORT}번에서 작동중입니다.`)
])