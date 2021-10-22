import React from 'react';
import { Container, Grid } from '@mui/material/';
import Hero from '../../components/Hero';
import me from '../../assets/images/me.png';
import classes from './home.module.scss';

const Home: React.FC = (): React.ReactElement => {
    return (
        <div className={classes.home}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2:2"
                                    x1="9.15091"
                                    y1="79.5571"
                                    x2="80.3477"
                                    y2="5.85223"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#F87537" />
                                    <stop offset="1" stop-color="#FBA81F" />
                                </linearGradient>
                            </defs>
                            <mask id="mask0" mask-type="alpha">
                                <path
                                    d="M72.4 25.6C78.6 33.8 82.8 41.9 82.9 50C82.9 58.2 78.7 66.3 72.5 71.8C66.3 77.2 58.2 80 50.5 79.5C42.8 79 35.6 75.3 27.5 69.9C19.5 64.4 10.6 57.2 9.29999 48.7C8.09999 40.2 14.3 30.4 22.3 22.2C30.4 14.1 40.2 7.5 49.1 8.4C58.1 9.3 66.2 17.5 72.4 25.6Z"
                                    fill="url(#paint0_linear_2:2)"
                                    width="100%"
                                    height="100%"
                                />
                            </mask>
                            <g mask="url(#mask0)">
                                <path
                                    d="M72.4 25.6C78.6 33.8 82.8 41.9 82.9 50C82.9 58.2 78.7 66.3 72.5 71.8C66.3 77.2 58.2 80 50.5 79.5C42.8 79 35.6 75.3 27.5 69.9C19.5 64.4 10.6 57.2 9.29999 48.7C8.09999 40.2 14.3 30.4 22.3 22.2C30.4 14.1 40.2 7.5 49.1 8.4C58.1 9.3 66.2 17.5 72.4 25.6Z"
                                    fill="url(#paint0_linear_2:2)"
                                    width="100%"
                                    height="100%"
                                />

                                <image href={me} x={'0'} y={'2'} className={classes.pic} />
                            </g>
                        </svg>
                    </Grid>
                    <Grid item xs={6}>
                        <Hero />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
