import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';


const Cards = ({ data: {confirmed, deaths, lastupdate, recovered} }) =>{



    
    console.log(lastupdate);



    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> infected </Typography>

                        <Typography varient="h5">
                            <CountUp 
                            start={0}
                            end={confirmed}
                            duration={10}
                            seperator=","
                            >

                            </CountUp>
                            </Typography>

                        <Typography color="textSecondary">{lastupdate}</Typography>
                        <Typography variant="body2"> Number of confirmed coronavirus cases </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography varient="h5"></Typography>
                        <Typography color="textSecondary">{recovered}</Typography>
                        <Typography variant="body2"> Number of recovered Victims </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography varient="h5">{deaths}</Typography>
                        <Typography color="textSecondary"> Data</Typography>
                        <Typography variant="body2"> Number of confirmed Deaths </Typography>
                    </CardContent>
                </Grid>

            </Grid> 
            
        </div>
    );
}

export default Cards;