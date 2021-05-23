import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to right, #570091, #7522b6)',
    paddingBottom: '60px',
  },
  Container:{
      margin: 'auto',
  },
  paper: {
    textAlign: 'center',
    position: 'relative',
    '&:hover':{
      transform: 'scale(1.05)',
    },
  },
  img:{
    background:'#222222',
    opacity: '90%',
  },
  h6:{
      color:'white',
      padding: '1rem',
      fontWeight: 'bold',
      position: 'absolute',
      top: '30%',
      left: '7%',
      textAlign: 'center!important',
  },
}));

export const CaseStudies =()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container fixed maxWidth="md">
    <Grid container spacing={3} className={classes.Container}>
        <Grid item xs={12}>
            <h3 className="samples-heading"><strong>Case Studies</strong></h3>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <img className={classes.img} src="https://www.cortexcopywriter.com/img/blog_featured/blog_stock-10.jpg" alt="" width="100%" height="100%" />
            <Typography className={classes.h6} variant="h6" component="h6">
              <h3><strong style={{background:'#333', padding: '10px 20px', opacity:'70%'}}>Ausbeds: Scripted Chatbot</strong></h3>
              <h5 className="samples-heading-h5" style={{textAlign: 'center', color: 'white', fontWeight: '100'}}>Cortex Copywriter</h5>
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <img className={classes.img} src="https://www.cortexcopywriter.com/img/blog_featured/blog_stock-6.jpg" alt="" width="100%" height="100%"/>
            <Typography className={classes.h6} variant="h6" component="h6">
            <h3><strong style={{background:'#333', padding: '10px 20px', opacity:'70%'}}>Ausbeds: Scripted Chatbot</strong></h3>
            <h5 className="samples-heading-h5" style={{textAlign: 'center', color: 'white', fontWeight: '100'}}>Cortex Copywriter</h5>
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
          <img className={classes.img} src="https://www.cortexcopywriter.com/img/blog_featured/blog_stock-5.jpg" alt="" width="100%" height="100%"/>
          <Typography className={classes.h6} variant="h6" component="h6">
          <h3><strong style={{background:'#333', padding: '10px 20px', opacity:'70%'}}>Ausbeds: Scripted Chatbot</strong></h3>
          <h5 className="samples-heading-h5" style={{textAlign: 'center', color: 'white', fontWeight: '100'}}>Cortex Copywriter</h5>
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}
