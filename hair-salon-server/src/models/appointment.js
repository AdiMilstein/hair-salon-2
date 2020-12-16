const mongoose = require('mongoose')

const Appointment = mongoose.model('Appointment', {
    time: {
        type: String,  
        required: true
    }, 
    taken: {
        type: Boolean, 
        default: true 
    }
})

module.exports = Appointment