import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to right, #570091, #7522b6);',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  footerParagraph:{
    color: '#ececec',
    textAlign: 'center',
    fontWeight: '100',
    letterSpacing: '2px',
  }
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Container fixed>
          <Typography className={classes.footerParagraph} verient="body1" component="div">
          Based in Sydney, Australia. Available worldwide.
          </Typography>
        </Container>
        </Grid>
        <Grid item xs={12}>
        <Container fixed>
          <Typography className={classes.footerParagraph} verient="body1" component="div">
          © Cortex Copywriter 2021 | ABN 341 1599 0520
          </Typography>
          <Typography className={classes.footerParagraph} verient="body1" component="div">
          <small>Interaction Design + Code by Liam Key</small>
          </Typography>
        </Container>
        </Grid>
      </Grid>
    </div>
  );
}


