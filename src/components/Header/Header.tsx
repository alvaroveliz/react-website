import React from 'react';
import { Container, Grid, Link } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TranslateIcon from '@mui/icons-material/Translate';

import logo from '../../assets/images/logo.svg';
import classes from './header.module.scss';

//const preventDefault = (event: any) => event.preventDefault();

const Header: React.FC = (): React.ReactElement => {
    return (
        <header className={classes.header}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={logo} alt="Me" className={classes.logo} />
                    </Grid>
                    <Grid item xs={6} className={classes.menu}>
                        <Link href="#" className={classes.menuLink}>
                            Home
                        </Link>
                        <Link href="#" className={classes.menuLink}>
                            About
                        </Link>
                        <Link href="#" className={classes.menuLink}>
                            Skills
                        </Link>
                        <Link href="#" className={classes.menuLink}>
                            Experience
                        </Link>
                        <Link href="#" className={classes.menuLink}>
                            Contact me
                        </Link>
                        <Link href="#">
                            <TranslateIcon />
                        </Link>
                        <Link href="#">
                            <DarkModeOutlinedIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};

export default Header;
