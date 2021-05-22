import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to right, #9803be, #660798)',
  },
}));

export const Services = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container fixed>
        <Grid container spacing={3}>
        <Grid item xs={6}>
            <div className="image-adjust">
                <img src={"https://www.cortexcopywriter.com/img/services/services-5.svg"} alt="Front Layer" className="header-front"/>
            </div>   
        </Grid>
        <Grid item xs={6}>
        <Container>
            <h1 className="ux-heading">UX Writing</h1>
            <p className="ux-paragraph">I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
            <ul className="ux-listtag">
                <li>Microcopy</li>
                <li>Taxonomy & Labeling</li>
                <li>Chatbots</li>
                <li>User Research</li>
                <li>Content Style Guide</li>
                <li>User Testing</li>
                <li>Design Principles</li>
                <li>Prototype</li>
            </ul>
        </Container>
        </Grid> 
      </Grid>

        <Grid container spacing={3}>
        <Grid item xs={6}>
            <Container>
                <h1 className="ux-heading">Website Copywriting</h1>
                <p className="ux-paragraph">Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.

</p>
                <ul className="ux-listtag">
                    <li>Information Architecture</li>
                    <li>Wireframes</li>
                    <li>Competitor Analysis</li>
                    <li>On-page SEO</li>
                    <li>Off-page SEO</li>
                    <li>USP/UVP</li>
                    <li>Landing Page</li>
                    <li>Sales Letter</li>
                </ul>
            </Container>
            </Grid> 

            <Grid item xs={6}>
                <div className="image-adjust">
                    <img src={"https://www.cortexcopywriter.com/img/services/services-6.svg"} alt="Front Layer" className="header-front"/>
                </div>   
            </Grid>
            
        </Grid>

        <Grid container spacing={3}>
        <Grid item xs={6}>
            <div className="image-adjust">
                <img src={"https://www.cortexcopywriter.com/img/services/services-7.svg"} alt="Front Layer" className="header-front"/>
            </div>   
            </Grid>
            <Grid item xs={6}>
            <Container>
                <h1 className="ux-heading">Content Writing</h1>
                <p className="ux-paragraph">Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
                <ul className="ux-listtag">
                    <li>Headlines & Taglines</li>
                    <li>Content Strategy</li>
                    <li>Blogs & Articles</li>
                    <li>Social Media Content</li>
                    <li>Video Scripts</li>
                    <li>eDMs & Newsletters</li>
                    <li>Case Studies</li>
                    <li>Whitepapers</li>
                </ul>
            </Container>
            </Grid> 
        </Grid>
        </Container>
      
      
    </div>
  );
}
