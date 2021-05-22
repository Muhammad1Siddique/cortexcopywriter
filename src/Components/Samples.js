import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to right, #860091, #662975)',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Samples =()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container fixed maxWidth="md">
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <h3 className="samples-heading"><strong>Samples</strong></h3>
            <h3 className="samples-heading">Useful UX</h3>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </Container>
      
    </div>
  );
}
