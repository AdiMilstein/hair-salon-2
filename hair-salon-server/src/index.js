const express = require('express')

require('./db/mongoose')
const Appointment = require('./models/appointment')

const app = express() 
const port = process.env.PORT || 3001

app.use(express.json())

const errorMsg = 'Your appointment is taken, please choose anoter date'

app.post('/appointments', async (req, res) => {
    Appointment.exists({ time: req.body.data }, async function(err, doc) {
        if(doc) {
            console.log('true');
            res.send({errorMsg})
        } else {
            try {
                console.log(req.body)    
                const appointment = await new Appointment({time: req.body.data})
                appointment.save() 
                res.status(201).send({appointment})
            } catch (e){
                res.status(400).send(e)
            }
        }
    })
});

app.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find({})
        console.log(appointments + 'Adi');
        res.send(appointments)
    } catch (e) {
        res.status(500).send()
    }
});

app.listen(port, () => {
    console.log('server is on port ', port);
});