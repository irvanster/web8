const express = require("express")
const bookingController = require('../controller/bookingController')
const router = express.Router()

router.get('/', bookingController.getAllBooking)
router.post('/', bookingController.addNewBooking)
router.patch('/:id', bookingController.updateBooking)
router.delete('/:id', bookingController.deleteBooking)




module.exports = router