import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Container } from '@mui/material';
import { useTheme } from '@emotion/react';
import SideBar from './SideBar';

const useStyles = makeStyles(()=>({
    
    wrapperContainer: {
        paddingTop: useTheme().spacing(7),
        height: "100vh",
    },
    
}));


const About = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.wrapperContainer}>
            <Grid item md={2.5} sm={6} xs={4}>
                <SideBar />
            </Grid>
            <Grid item md={9.5} sm={6} xs={8}>
                <Container style={{textIndent:"2em"}}>
                    <Typography>             
                        3rd grade of Bachelor's at Hacettepe University Computer Engineering. I have basic knowledge on a few different 
                        fields of Developing. If you check my Github account, you will see a mobile game which is available in Google Play 
                        Store, projects on machine learning (dynamic layer of neural network implementation from scratch; ham, spam mail
                        detection by NLP and Naive Bayes classifier from scratch), simple web apps(react.js, angular in front end;
                        java + spring boot, node.js in backend.) Basic bitcoin implementation etc.
                    
                        Finally I've decided to work in web3.0 development. I'm trying to learn smart contracts on Ethereum +  
                        React.js more professionally.
                    </Typography>
                    <br></br>
                    <Typography>
                        I'm working with a company in UK since 15/02/2022. What I'm doing is to develop desktop apps which automates 
                        data analysis. I'm using python(tkinter for GUI; pandas, numpy, matplotlib etc. for data manipulation and third
                        party packages such as sweetviz, pandas_profiling) for the analysis. Since the app I develop analyzes big data, 
                        operations on the data are supposed to be async, and that pushes me to deal with more advanced topics such as threads, 
                        async processes etc.
                    </Typography>
                    <br></br>
                    <Typography>
                        I have 1.5 months of official experience (internship) in LC Waikiki. I have used Flutter for front-end 
                        development and written API's with Python's Flask framework during my internship.
                    </Typography>
                    <br></br>
                    <Typography>
                        I'm open for your offers of long-term internship starting from this summer.
                        My current GPA is 2.93/4, I hope it will be over 3.00 by the end of this semester.
                    </Typography>
                    <br></br><br></br>
                    <Typography style={{fontWeight:"bold"}}>
                        Contact: Bilgehanaygn@gmail.com
                    </Typography>
                </Container>
            </Grid>
        </Grid>
    );
}

export default About;