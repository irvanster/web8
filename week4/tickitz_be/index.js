const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const router = require('./routes')
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