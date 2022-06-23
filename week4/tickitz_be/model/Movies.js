// model = tempat dimana kita meletakkan data yang berhubungan dengan database
const db = require('../helper/db_connection')

module.exports = {
    get: (req, res)=> {
      return new Promise((resolve, reject)=> {
        const {title='', director=''} = req.query
        const sql = `SELECT * FROM movies ${title ? `WHERE title LIKE '%${title}%'`: title && director ? `WHERE title LIKE '%${title}%' AND director LIKE '${director}%'`:''} ORDER BY release_date DESC`
        db.query(sql,(err, results)=> {
          if(err) {
            reject({message: "ada error"})
          }
          resolve({
            message: "get all from movies success",
            status: 200,
            data: results
          })
        })
      })
    },
    add: (req, res)=> {
      return new Promise((resolve, reject)=> {
        const {title, cover, release_date, director, description, casts, categories} = req.body

        db.query(`INSERT INTO movies(title, cover, release_date, director, description, casts, categories) VALUES('${title}', '${cover}','${release_date}','${director}','${description}','${casts}','${categories}')`,(err, results)=> {
          if(err) {
            console.log(err)
            reject({message: "ada error"})
          }
          resolve({
            message: "add new movies success",
            status: 200,
            data: {
              id: results.insertId,
              ...req.body,
            }
          })
        })
      })
    },
    update: (req, res) => {
      return new Promise((resolve, reject)=> {
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
              reject({message: "ada error"})
            }
            resolve({
              message: "update movies success",
              status: 200,
              data: results
            })
          })
      
        })
      })
    },
    remove:(req, res)=> {
      return new Promise((resolve, reject)=> {
        const {id} = req.params
        db.query(`DELETE FROM movies where id=${id}`,(err, results)=> {
          if(err) {reject({message: "ada error"})}
          resolve.send({
            message: "delete movies success",
            status: 200,
            data: results
          })
        })
      })
    }
}