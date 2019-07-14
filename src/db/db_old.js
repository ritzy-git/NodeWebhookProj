const sqlite3 = require('sqlite3').verbose() // verbose to get debug logs
const path = require('path')

let db = new sqlite3.Database(path.join(__dirname,'../../db/mydata.db'),sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });



   exports.insertdata = function(data) {
      console.log(data)

     db.run(`INSERT INTO location(lat,long,phoneno,detectiontime) VALUES(?,?,?,?)`, [data.Location["Latitude"],data.Location["longitude"],data.phone_number,data.detection_time], function(err) {
        if (err) {
          return console.log(err.message);
        }
    },()=> {  db.close()} );
  
  }
exports.showdata = function(callback){

    let sql = `SELECT * FROM location ORDER BY id`;
 
    db.all(sql, [], (err, rows) => 
    {
      if (err) {
        throw err;
      }        
    callback(rows)
    }
     
    ); 
}





  



