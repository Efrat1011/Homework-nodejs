let express = require('express')
let server = express()

let PORT = 8000


server.use(express.json())

server.use((req,res,next)=>{
    if(req.method == 'GET'){
        console.log(`Middlewere jumis jasadi! Klient suranys jasagysy keldi. Metod: ${req.method} ${req.url}`);
    }
    next()
})


server.post('/api/registration',(req,res)=>{
    let {login, email, password} = req.body
    if(login && email && password){
        res.json({
            message: "User recieved!",
            login,
            email,
            password
        })
    }else{
        
    }
})



server.listen(PORT,()=>{
    console.log(`Server is working on ${PORT} port`);
    
})