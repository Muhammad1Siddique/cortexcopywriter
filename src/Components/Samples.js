import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to right, #860091, #662975)',
    paddingBottom: '60px',
  },
  Container:{
      margin: 'auto',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRedious: '4px',
    overflow: 'hidden',
    '&:hover':{
      transform: 'scale(1.05)',
    },
  },
  h6:{
      color:'black',
      textAlign: 'left',
      padding: '1rem',
      fontWeight: 'bold',
  },
  paragraph:{
      padding:'1rem',
      textAlign: 'justify',
      fontWeight: '300',
      color: 'black',
      height:'170px',
  },
  link:{
      textAlign: 'left',
      textDecoration: 'none',
      padding: '1rem',
  }
}));

export const Samples =()=> {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  

  return (
    <div className={classes.root}>
    <Container fixed maxWidth="md">
    <Grid container spacing={3} className={classes.Container}>
        <Grid item xs={12}>
            <h3 className="samples-heading"><strong>Samples</strong></h3>
            <h3 className="samples-heading">Useful UX</h3>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <img src="https://www.cortexcopywriter.com/img/samples/chatbot.jpg" alt="" width="100%" height="170" />
            <Typography className={classes.h6} variant="h6" component="h6">
                Conversation Design
            </Typography>
            <Typography className={classes.paragraph} variant="body1" component="p">
            I designed a chatbot personality and scripts to convert complex mattress fitting data into simple dialogue for a chatbot that guides customers in choosing the right mattress for their weight range.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View chatbot case study</Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <img src="https://www.cortexcopywriter.com/img/samples/atlassian_logo.png" alt="" width="100%" height="170"/>
            <Typography className={classes.h6} variant="h6" component="h6">
                Content Design
            </Typography>
            <Typography className={classes.paragraph} variant="body1" component="p">
            I’m currently a Content Designer at Atlassian. I craft effective UX writing and longer form explanatory content for enterprise-level products against an agile and frequent product release schedule.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View content design samples</Link>
            </Typography>
            
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
          <img src="https://www.cortexcopywriter.com/img/samples/speedpix.jpg" alt="" width="100%" height="170"/>
          <Typography className={classes.h6} variant="h6" component="h6">
            User Onboarding
          </Typography>
          <Typography className={classes.paragraph} variant="body1" component="p">
          To create a smooth introduction to a SaaS product, I used reassuring details and informative labels to reduce ambiguity and improve conversion rates.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View onboarding sample</Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
            <h3 className="samples-heading">Digital Copy</h3>
        </Grid>

        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <img src="https://www.cortexcopywriter.com/img/samples/blaze_sample.jpg" alt="" width="100%" height="170" />
            <Typography className={classes.h6} variant="h6" component="h6">
                Rebranding Campaign
            </Typography>
            <Typography className={classes.paragraph} variant="body1" component="p">
            I designed a chatbot personality and scripts to convert complex mattress fitting data into simple dialogue for a chatbot that guides customers in choosing the right mattress for their weight range.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View rebranding case study</Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <img src="https://www.cortexcopywriter.com/img/samples/tara.jpg" alt="" width="100%" height="170"/>
            <Typography className={classes.h6} variant="h6" component="h6">
                Facebook Ads
            </Typography>
            <Typography className={classes.paragraph} variant="body1" component="p">
            I’m currently a Content Designer at Atlassian. I craft effective UX writing and longer form explanatory content for enterprise-level products against an agile and frequent product release schedule.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View ad samples</Link>
            </Typography>
            
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
          <img src="https://www.cortexcopywriter.com/img/samples/purelearning_sample.jpg" alt="" width="100%" height="170"/>
          <Typography className={classes.h6} variant="h6" component="h6">
            Explainer Video
          </Typography>
          <Typography className={classes.paragraph} variant="body1" component="p">
          To create a smooth introduction to a SaaS product, I used reassuring details and informative labels to reduce ambiguity and improve conversion rates.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View video sample</Link>
            </Typography>
          </Paper>
        </Grid>

        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <img src="https://www.cortexcopywriter.com/img/samples/adgroove_sample.jpg" alt="" width="100%" height="170"/>
            <Typography className={classes.h6} variant="h6" component="h6">
                YouTube Ad
            </Typography>
            <Typography className={classes.paragraph} variant="body1" component="p">
            I wrote, storyboarded, and directed a 3D animated video advertisement to introduce a company mascot. The ad ran for 30 days and yielded 19 conversions with a 67% view rate.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View ad sample</Link>
            </Typography>
            
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
          <img src="https://www.cortexcopywriter.com/img/samples/rayvonsnest_sample.jpg" alt="" width="100%" height="170"/>
          <Typography className={classes.h6} variant="h6" component="h6">
            Pilot Screenplay
          </Typography>
          <Typography className={classes.paragraph} variant="body1" component="p">
          My award-winning, original, sci-fi, adult animated, pilot screenplay has successfully been pitched to production companies in the USA and Australia.
            </Typography>
            <Typography className={classes.link} variant="body1" component="p">
            <Link href="#" onClick={preventDefault} variant="body2">View screenwriting award</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

    </Container>
      
    </div>
  );
}
