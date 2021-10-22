import React from 'react';
import { Box, Typography } from '@mui/material/';
import classes from './hero.module.scss';

const Hero: React.FC = (): React.ReactElement => {
    return (
        <div className={classes.hero}>
            <Typography variant="h5" gutterBottom>
                Hola, soy
            </Typography>
            <Typography variant="h1" gutterBottom>
                <Box fontWeight="bold">Álvaro Véliz</Box>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Desarrollador Full-Stack con más de 10 años de experiencia en aplicaciones SaaS y desarrollo front-end,
                back-end. He liderado a equipos de 5 a 10 personas relacionados con tecnología y negocios.
            </Typography>
        </div>
    );
};

export default Hero;
