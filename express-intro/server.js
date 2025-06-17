const express = require('express')
const server = express()

const PORT = 3000

server.get('/',(req,res)=>{
    res.send('Қош келдіңіз!(Welcome message!)')
})
server.get('/about',(req,res)=>{
    res.send('Бұл сервер туралы қысқаша ақпарат.')
})
server.get('/api/info',(req,res)=>{
    res.json({
        developer: "Mr.Efrat",
        subject: "Express"
    })
})





server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})