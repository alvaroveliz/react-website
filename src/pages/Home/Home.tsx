import React from 'react';
import { Container, Grid, List, ListItem, ListItemText } from '@material-ui/core/';
import Hero from '../../components/Hero';
import Skills from '../../components/Skills';
import LatestPosts from '../../components/LatestPosts';
import me from '../../assets/images/me.png';
import classes from './home.module.scss';

const Home: React.FC = (): React.ReactElement => {
    return (
        <div className={classes.home}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={me} className={classes.me} alt="Álvaro Véliz" />
                        <List component="nav">
                            <ListItem button selected={true}>
                                <ListItemText primary="Inicio" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Blog" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Contacto" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={8}>
                        <Hero />
                        <Skills />
                        <LatestPosts />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
