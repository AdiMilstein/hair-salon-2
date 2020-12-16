import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TimeSlot from './TimeSlot'

const times = ["6:00", "7:00", "8:00", "9:00", "10:00","11:00",]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {
            times.map((time) => {
                return <TimeSlot key={time} time={time}></TimeSlot>
            })
        }        
      </Grid>
    </div>
  );
}