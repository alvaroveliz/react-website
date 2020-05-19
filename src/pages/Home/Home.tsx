import React from 'react';
import { Container, Grid, List, ListItem, ListItemText } from '@material-ui/core/';
import Hero from '../../components/Hero';
import LatestPosts from '../../components/LatestPosts';
import me from '../../assets/images/me.png';
import classes from './home.module.scss';

const Home: React.FC = (): React.ReactElement => {
    return (
        <div className={classes.home}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={me} className={classes.me} />
                        <List component="nav">
                            <ListItem button selected={true}>
                                <ListItemText primary="Inicio"></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Blog"></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Contacto"></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={8}>
                        <Hero />
                        <LatestPosts />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
