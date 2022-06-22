const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./helper/db_connection')
//cara pertama kita input kita ada di json (di postman: body > Raw > Type = JSON)
app.use(bodyParser.json())
//www-url-form-encoded
app.use(bodyParser.urlencoded({ extended: true }))
//form-data (multer)



app.get('/movies', (req, res) => {
  console.log(req.query.title)
  const {title='', director=''} = req.query
  const sql = `SELECT * FROM movies ${title ? `WHERE title LIKE '%${title}%'`: title && director ? `WHERE title LIKE '%${title}%' AND director LIKE '${director}%'`:''} ORDER BY release_date DESC`
  db.query(sql,(err, results)=> {
    if(err) {res.send({message: "ada error"})}
    res.status(200).send({
      message: "get all from movies success",
      status: 200,
      data: results
    })
  })
})

app.post('/movies', (req, res) => {
  const {title, cover, release_date, director, description, casts, categories} = req.body

  db.query(`INSERT INTO movies(title, cover, release_date, director, description, casts, categories) VALUES('${title}', '${cover}','${release_date}','${director}','${description}','${casts}','${categories}')`,(err, results)=> {
    if(err) {
      console.log(err)
      res.send({message: "ada error"})
    }
    res.status(200).send({
      message: "add new movies success",
      status: 200,
      data: results
    })
  })
})

app.patch('/movies/:id', (req, res) => {

  const {id} = req.params
  db.query(`SELECT * FROM movies where id=${id}`,(err, results)=> {
    if(err) {res.send({message: "ada error"})}

    const previousData = {
      ...results[0],
      ...req.body
    }
    const {title, cover, release_date, director, description, casts, categories} = previousData

    db.query(`UPDATE movies SET title='${title}', cover='${cover}', release_date='${release_date}', director='${director}', description='${description}', casts='${casts}', categories='${categories}'`,(err, results)=> {
      if(err) {
        console.log(err)
        res.send({message: "ada error"})
      }
      res.status(200).send({
        message: "update movies success",
        status: 200,
        data: results
      })
    })

  })
})


app.delete('/movies/:id', (req, res) => {

  const {id} = req.params

  db.query(`DELETE FROM movies where id=${id}`,(err, results)=> {
    if(err) {res.send({message: "ada error"})}
    res.status(200).send({
      message: "delete movies success",
      status: 200,
      data: results
    })
  })
})



app.listen(port, () => {
  console.log(`Tickitz Backend listening on port ${port}`)
})