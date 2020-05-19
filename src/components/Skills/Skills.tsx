import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Skills: React.FC = (): React.ReactElement => {
    return (
        <div>
            <ExpansionPanel square>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="skills-content"
                    id="skills-header"
                >
                    <Typography>Más sobre mi y mis habilidades</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={4}>
                        <Grid item>
                            <Typography variant="overline" display="block" gutterBottom>
                                FrontEnd
                            </Typography>
                            <Typography variant="body2">
                                React JS, TypeScript, AngularJS.
                                <br />
                                CSS3, ES6/ES2015, SaSS, LESS.
                                <br />
                                HTML5, JSON, Jade, RESTFul API
                                <br />
                                Yarn, Bower, Grunt, Gulp, Yeoman
                                <br />
                                XML, JSON, jQuery.
                                <br />
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                BackEnd
                            </Typography>
                            <Typography variant="body2">
                                PHP, Laravel, Symfony.
                                <br />
                                NodeJS, Express, NextJS.
                                <br />
                                Java, Python.
                                <br />
                                SOAP, XMLRPC
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                Bases de datos
                            </Typography>
                            <Typography variant="body2">
                                MariaDB / MySQL, PostgresSQL <br />
                                SQLite, SQLServer, DBII
                            </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default Skills;
