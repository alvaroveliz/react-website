import React from 'react';
import { Typography, Grid, Chip } from '@mui/material/';
import classes from './skills.module.scss';

const Skills: React.FC = (): React.ReactElement => {
    const frontEndSkills = [
        'React JS',
        'TypeScript',
        'AngularJS',
        'RESTFul API',
        'CSS3',
        'ES6/ES2015',
        'Sass',
        'LESS',
        'HTML5',
        'Yarn',
        'Gulp',
        'XML',
        'JSON',
        'jQuery',
    ];

    const backEndSkills = [
        'NodeJS',
        'Express',
        'PHP',
        'Laravel',
        'Symfony',
        'NextJS',
        'Java',
        'Python',
        'SOAP',
        'XMLRPC',
    ];

    const databases = ['MariaDB / MySQL', 'PostgresSQL', 'SQLite', 'SQLServer', 'DBII'];

    const devOps = ['Circle CI', 'Gitlab CI', 'Ubuntu Server', 'Debian', 'Git', 'SVN'];

    const cloud = ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Vagrant'];

    const manage = ['PMI', 'Agile', 'Scrum', 'Kanban', 'Jira', 'Trello', 'MS Project'];

    return (
        <div className={classes.skills}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                        FrontEnd
                    </Typography>
                    <Typography variant="body2">
                        <div className={classes.skillsTags}>
                            {frontEndSkills.map((skill) => {
                                return <Chip variant="outlined" label={skill} size="small" />;
                            })}
                        </div>
                    </Typography>
                    <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                        BackEnd
                    </Typography>
                    <Typography variant="body2">
                        <div className={classes.skillsTags}>
                            {backEndSkills.map((skill) => {
                                return <Chip variant="outlined" label={skill} size="small" />;
                            })}
                        </div>
                    </Typography>
                    <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                        Bases de datos
                    </Typography>
                    <Typography variant="body2">
                        <div className={classes.skillsTags}>
                            {databases.map((skill) => {
                                return <Chip variant="outlined" label={skill} size="small" />;
                            })}
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                        DevOps / Servicios
                    </Typography>
                    <Typography variant="body2">
                        <div className={classes.skillsTags}>
                            {devOps.map((skill) => {
                                return <Chip variant="outlined" label={skill} size="small" />;
                            })}
                        </div>
                    </Typography>
                    <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                        Cloud Computing
                    </Typography>
                    <Typography variant="body2">
                        <div className={classes.skillsTags}>
                            {cloud.map((skill) => {
                                return <Chip variant="outlined" label={skill} size="small" />;
                            })}
                        </div>
                    </Typography>
                    <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                        Gestión
                    </Typography>
                    <Typography variant="body2">
                        <div className={classes.skillsTags}>
                            {manage.map((skill) => {
                                return <Chip variant="outlined" label={skill} size="small" />;
                            })}
                        </div>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Skills;
