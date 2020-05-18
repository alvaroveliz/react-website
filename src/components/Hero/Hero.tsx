import React from "react";
import { Box, Typography } from '@material-ui/core/';
import classes from "./hero.module.scss";

const Hero: React.FC = (): React.ReactElement => {
    return (
        <div className={classes.hero}>
            <Typography variant="h1" gutterBottom>
                <Box fontWeight="bold">Hola, soy Álvaro Véliz</Box>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Ingeniero Informático Senior con más de 10 años de experiencia en desarrollo Front-end, 
                Back-end y aplicaciones SaaS. Actualmente trabajo en <a href="https://viajesfalabella.cl">Viajes Falabella by Despegar</a> como 
                Ingeniero de Desarrollo, y estoy en mi segunda vuelta por las tecnologías.
                He vuelto con el <a href="">blog</a> y a veces hago un <a href="https://open.spotify.com/show/2ovzcF7Cz5hvJqPkmuuz67">podcast</a> con un amigo.
                Mis amigos y cercanos también me conocen como <a href="https://mixcloud.com/thisperso">DJ thisperso</a>.
            </Typography>
        </div>
    );
}

export default Hero;
