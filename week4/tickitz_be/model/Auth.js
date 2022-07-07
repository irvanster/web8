// model = tempat dimana kita meletakkan data yang berhubungan dengan database
const db = require("../helper/db_connection");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const {useError} = require('../helper/message')
// const {error} = require('../helper/message')

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;
    return new Promise((resolve, reject) => {

      db.query(
        `SELECT id, password, role FROM users WHERE email='${email.toLowerCase()}'`,
        (err, results) => {
          if (err) {
            console.log(err)
            reject({ message: "ada error" });
          }else {
            if(!results.length) {
              reject({message: "Email/Password Salah."})
            }else {
              bcrypt.compare(password, results[0].password, (errHashing, successHashing) => {
                if(errHashing) {reject({message: "Ada Masalah Saat Login, Harap coba lagi."})} //bycript error, tampilin ke user seolah2
                if(successHashing) {
                  const token = jwt.sign({ user_id: results[0].id, role: results[0].role}, process.env.JWT_SECRET_KEY, {
                    expiresIn: '1 day'
                  });
                  console.log(process.env.JWT_SECRET_KEY)
                  resolve({
                    message: "login success",
                    status: 200,
                    data: {
                      token,
                      user_id: results[0].id
                    },
                  });
                }else {reject({message: "Email/Password Salah."})}
              });
            }
          }
        }
      );
    });
  },
  register: (req, res) => {
    const { name, email, password, image} = req.body;
    return new Promise((resolve, reject) => {
      // if(req.body.role) {
      //   resolve({
      //     message: "hayo mau ngapain"
      //   })
      // }
      bcrypt.hash(password, 10, function (err, hashedPassword) {
        if (err) {
          console.log(err)
          reject({ message: "ada erradadawar" });
        } else {
          db.query(
            `INSERT INTO users(name, email, password, image) VALUES('${name}', '${email}', '${hashedPassword}', '${image}')`,
            (err, results) => {
              if (err) {
                console.log(err)
                reject(useError(err.code));
              }
              resolve({
                message: "register success",
                status: 201,
                data: results,
              });
            }
          );
        }
      });
    });
  },
};
