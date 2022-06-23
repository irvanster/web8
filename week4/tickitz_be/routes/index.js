const express = require("express");
const app = express()
const moviesRoute = require('./moviesRoute')
const bookingRoute = require('./bookingRoute')

app.use('/movies', moviesRoute)
app.use('/booking', bookingRoute)




module.exports = app

// const moviesRoute = require('./moviesRoute')

// const router = (app, prefix, cors)=> {
//     app.use(`${prefix}/movies`, moviesRoute)
// }




// module.exports = router
// module.exports = app

