// controller = tempat dimana kita menghubungkan antara client dan database
const Booking = require('../model/Booking')

module.exports = {
    getAllBooking: async (req, res)=> {
        try {
            const results = await Booking.get(req, res)
            res.status(200).send({
                message: 'awokwo'
            })
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addNewBooking: async (req, res)=> {
        try {
            const results = await Booking.add(req, res)
            res.status(201).send(results)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    updateBooking: async(req, res) => {
        try {
            const results = await Booking.update(req, res)
            res.status(201).send(results)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    deleteBooking: async(req, res)=> {
        try {
            const results = await Booking.remove(req, res)
            res.status(201).send(results)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}