import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 220,
    maxHeight: 90
  }
}));


export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper xs className={classes.paper}>
        <Grid item xs>
        <Typography gutterBottom variant="body2">
            {props.time}
        </Typography>
        <Typography variant="body2" gutterBottom>
            Open slot
        </Typography>
        </Grid>
        <Grid item>
            <Typography onClick={() => { alert('clicked') }} variant="body2" style={{ cursor: 'pointer', color: "red" }}>
                Reserve slot
            </Typography>
        </Grid>
      </Paper>
    </div>
  );
}