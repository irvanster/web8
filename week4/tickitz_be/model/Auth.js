// model = tempat dimana kita meletakkan data yang berhubungan dengan database
const db = require("../helper/db_connection");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;
    return new Promise((resolve, reject) => {

      db.query(
        `SELECT id, password FROM users WHERE email='${email.toLowerCase()}'`,
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
                  const token = jwt.sign({ user_id: results[0].id}, process.env.JWT_SECRET_KEY);
                  console.log(process.env.JWT_SECRET_KEY)

                  // var decoded = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NTcxMDMyNjJ9.5Si2fUSuaAiIrcvHUPhgN_ViiWIpWU1I77XbWhnUmps", process.env.JWT_SECRET_KEY);
                  // console.log(decoded) // bar
                  
                  // // verify a token symmetric
                  // jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NTcxMDMyNjJ9.KEu4w29fOtuNcvhKf74pDLtBhb7612676", process.env.JWT_SECRET_KEY, function(err, decoded) {
                  //   console.log(decoded) // bar
                  // });
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
    const { name, email, password, image } = req.body;
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, function (err, hashedPassword) {
        if (err) {
          reject({ message: "ada error" });
        } else {
          db.query(
            `INSERT INTO users(name, email, password, image) VALUES('${name}', '${email}', '${hashedPassword}', '${image}')`,
            (err, results) => {
              if (err) {
                reject({ message: "ada error" });
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
