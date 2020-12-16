import axios from 'axios';
import React, { useState } from 'react';
import hours from '../constants/reactSelectOptions';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, ThemeProvider, Typography } from '@material-ui/core';

import '../App.css';
import today from '../utils/today';
import dateInPast from '../utils/dateInPast';
import MyAppointments from './MyAppointments';
import { useStyles, theme } from '../styles/DashboardStyles';
import dateConverter from '../utils/dateConverter';


const defaultValues = {
  Select: '08:00',
  DatePicker: '2020-12-16'
};

export default function Dashboard() {
    
  const { handleSubmit, control } = useForm({ defaultValues });
  const [errorMsg, setErrorMsg] = useState('')
  const classes = useStyles();

  
  const onSubmit = async (data) => {
    const date = dateConverter(data)
    console.log(dateInPast(date, today));
    if (dateInPast(date, today) === true) {
        setErrorMsg('You cant set an appointment for a past date')
    } else {
        const res = await axios.post('/appointments', {data: date})
        console.log(res.data);
        setErrorMsg(res.data.errorMsg)
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Typography variant='h2' component='h2' gutterBottom>
        Welcome to Adi's hair salon
    </Typography>
    <Typography variant='h5' gutterBottom>
        Book yourself an appointment with the best hair designer in Glilot!  
    </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='container'>
            <section>
            <label>Pick a date</label>

                <Controller
                    as={
                        <TextField
                            id='date'
                            type='date'
                            value={today}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        }
                    control={control}
                    name='DatePicker'
                />
            </section>
          <section>
            <label>Select time</label>
            <Controller
              as={
                <Select>
                {hours.map((hour) => {
                    return <MenuItem value={hour} key={hour}>{hour}</MenuItem>
                })}
                </Select>
              }
              name='Select'
              control={control}
            />
          </section>
        </div>

        <button className='button' type='submit'>Book an appointment</button>
        {errorMsg !== '' && <b>{errorMsg}</b>}
      </form>
    
      <Typography variant='p' gutterBottom>
        Your booked appointments:  
      </Typography>
    <MyAppointments></MyAppointments>
    </ThemeProvider>
  );
}

