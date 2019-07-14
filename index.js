const express = require("express"),
      bodyparser = require('body-parser')


const app = express()
app.use(bodyparser.json())

const port = 3000
app.post('/Savedata',(req,res) => {
    console.log(req.body)
})

app.listen(port, () => 
    console.log(`server is running on port ${port}`)
)