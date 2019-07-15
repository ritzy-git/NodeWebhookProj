const express = require("express"),
      app = express(),
      bodyparser = require('body-parser'),
      server = require('http').createServer(app),
      io = require('socket.io')(server);

app.use(bodyparser.json())

const port = process.env.PORT || 3000;
app.post('/Savedata',(req,res) => {
    
    io.on('connection', (socket,req) => {
        console.log(req.body);
        socket.emit('location',req.body);
        console.log(req.body);
    })
})

io.on('connection', () =>{
    console.log('a user is connected')
  })



server.listen(port);
// app.listen(port, () => 
//     console.log(`Server is running on port ${port}`)
// )


