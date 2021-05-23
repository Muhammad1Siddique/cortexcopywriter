import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgba(75,6,193,1)',
  },
}));

export const Home = ()=> {
  const classes = useStyles();

  const sceneryFrames =   [
    { transform: 'translateY(0)' },
    { transform: 'translateY(30px)' },
    { transform: 'translateY(0)' },
  ];

const sceneryTiming = {
  duration: 3000,
  iterations: Infinity,
  easing: "ease-in-out",
};

const animations = useWebAnimations({
  keyframes: sceneryFrames,
  animationOptions: sceneryTiming,
});

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Container style={{margin: '0 5rem'}} fixed>
            <h1 className="cortex">CORTEX</h1>
            <h1 className="copywriter">COPYWRITER</h1>
            <p className="cortexwriting">Enhance your communications with psychology-based copywriting and UX writing</p>
            <Button variant="contained" href="#contained-buttons">
                Send a Message
            </Button>
          </Container>
        </Grid>
        <Grid item xs={6}>
        <div className="bghome">
          <img ref={animations.ref} src={"https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg"} alt="Brain" className="header-brain"/>
          <img src={"https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg"} alt="Front Layer" className="header-front"/>
          <img src={"https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg"} className="featured-image" alt="" />
            
        </div>   
        </Grid>
      </Grid>
    </div>
  );
}
