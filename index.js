const express = require("express"),
      bodyparser = require('body-parser'),
      db =  require('./src/db/db')

const app = express()
app.use(bodyparser.json())

const port = process.env.PORT || 3000;
app.post('/Savedata',(req,res) => {
   // console.log(req.body);
    db.insertdata(req.body)
    db.showdata((data)=> {
        res.send(data)
    })
    
})

app.listen(port, () => 
    console.log(`Server is running on port ${port}`)
)

