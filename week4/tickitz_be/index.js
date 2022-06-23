require('dotenv').config()
const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:3000'
  // origin: ['http://localhost:3000', 'http://tickitz.netlify.app']
})) //dapat diakses oleh semua orang
// ddoss attack
// localhost: 300, 00010

// localhost: sarang untuk para develop, hacker cracker
//cara pertama kita input kita ada di json (di postman: body > Raw > Type = JSON)
app.use(bodyParser.json())
//www-url-form-encoded
app.use(bodyParser.urlencoded({ extended: true }))
//form-data (multer)
// router(app, '/api/v1',)
app.use('/api/v1', router)


app.listen(port, () => {
  console.log(`Tickitz Backend listening on port ${port}`)
})