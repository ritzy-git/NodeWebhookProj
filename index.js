const express = require("express"),
      app = express(),
      bodyparser = require('body-parser'),
      db =  require('./src/db/db'),
      server = require('http').Server(app),
      io = require('socket.io').listen(app);



server.
app.use(bodyparser.json())

const port = process.env.PORT || 3000;
app.post('/Savedata',(req,res) => {
    //console.log(req.body)
    io.on('connection', (socket) => {
        console.log(req.body);
        socket.emit('location',req.body);
        //socket.on('my other event', function (data) {
        //    console.log(data);
        //  });
    })

        
    
    

})

app.listen(port, () => 
    console.log(`Server is running on port ${port}`)
)


