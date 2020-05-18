import React from "react";
import { Container, Grid } from '@material-ui/core/';
import Hero from "../../components/Hero";
import me from "../../assets/images/me.png";
import classes from "./home.module.scss";

const Home: React.FC = (): React.ReactElement => {

    return (<>
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={8}>
                    <Hero />
                </Grid>
                <Grid item xs={4}>
                    <img src={me} className={classes.me} />
                </Grid>
            </Grid>
        </Container>
    </>);
}

export default Home;
