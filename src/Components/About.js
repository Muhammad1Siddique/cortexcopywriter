import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import image from './image/about-image.png';
import useWebAnimations from '@wellyshen/use-web-animations';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to right, #570091, #7522b6)',
  },
}));

export const About = ()=> {
  const classes = useStyles();

  const sceneryFrames =   [
    { transform: 'scale(1)' },
    { transform: 'scale(1.05)' },
    { transform: 'scale(1)' },
  ];

const sceneryTiming = {
  duration: 2000,
  iterations: Infinity,
  easing: "ease-in-out",
};

const animations1 = useWebAnimations({
  keyframes: sceneryFrames,
  animationOptions: sceneryTiming,
});

  return (
    <div className={classes.root}>
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className="image-adjust">
                        <img ref={animations1.ref} src={image} alt="About" className="about-image"/>
                        <p className="about-image-title"><strong>Nathan Mudaliar</strong><em>, the Cortex Copywriter</em></p>
                    </div>   
                </Grid>
                <Grid item xs={6}>
                    <Container>
                        <h3 className="about-heading"><strong>About</strong></h3>
                        <p className="about-paragraph">My copywriting and UX writing draws on abilities developed in the psychological sciences.</p>
                        <p className="about-paragraph">Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.</p>
                    </Container>
                </Grid> 
            </Grid>
        </Container>
      
      
    </div>
  );
}
