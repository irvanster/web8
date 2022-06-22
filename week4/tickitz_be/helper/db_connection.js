const mysql = require('mysql')
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Tickitz001'
})

db.connect((err)=> {
  if(err) {
    console.log(err)
  }
  console.log('DB CONNECTED')
})


module.exports = db