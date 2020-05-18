import React from 'react';
import Box from '@material-ui/core/Box';

import { Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cartitem from '../HomePagesItem/Cart/CartItem';
import Appperformance from '../HomePagesItem/Cart/Appperformance';
import ServerOverView from '../HomePagesItem/Cart/ServerOverview';
import ReviewOverView from '../HomePagesItem/Cart/ReviewOverview';
import MainChart from '../HomePagesItem/Chart/MainChart/MainChart';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display:'flex',
  }
}));

const HomePage = () => {

  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
        <Grid item xs={3}>
          <Cartitem/>
        </Grid>
        <Grid item xs={3}>
          <Appperformance/>
        </Grid>
        <Grid item xs={3}>
        <ServerOverView></ServerOverView>
        </Grid>
        <Grid item xs={3}>
         <ReviewOverView></ReviewOverView>
        </Grid>
     </div>
     <Box width={1}> 
          <MainChart></MainChart>
      </Box>
     </>
  );
};

export default HomePage;