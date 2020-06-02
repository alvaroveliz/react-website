import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Grid,
    Chip,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classes from './skills.module.scss';

const Skills: React.FC = (): React.ReactElement => {
    const frontEndSkills: Array<string> = [
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

    const backEndSkills: Array<string> = [
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

    const databases: Array<string> = ['MariaDB / MySQL', 'PostgresSQL', 'SQLite', 'SQLServer', 'DBII'];

    const devOps: Array<string> = ['Circle CI', 'Gitlab CI', 'Ubuntu Server', 'Debian', 'Git', 'SVN'];

    const cloud: Array<string> = ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Vagrant'];

    const manage: Array<string> = ['PMI', 'Agile', 'Scrum', 'Kanban', 'Jira', 'Trello', 'MS Project'];

    return (
        <div className={classes.skills}>
            <ExpansionPanel square className={classes.skillsPanel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="skills-content"
                    id="skills-header"
                >
                    <Typography>Ver mis habilidades en detalle</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                                FrontEnd
                            </Typography>
                            <Typography variant="body2" component="div">
                                <div className={classes.skillsTags}>
                                    {frontEndSkills.map((skill, index) => {
                                        return <Chip variant="outlined" label={skill} size="small" key={index} />;
                                    })}
                                </div>
                            </Typography>
                            <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                                BackEnd
                            </Typography>
                            <Typography variant="body2" component="div">
                                <div className={classes.skillsTags}>
                                    {backEndSkills.map((skill, index) => {
                                        return <Chip variant="outlined" label={skill} size="small" key={index} />;
                                    })}
                                </div>
                            </Typography>
                            <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                                Bases de datos
                            </Typography>
                            <Typography variant="body2" component="div">
                                <div className={classes.skillsTags}>
                                    {databases.map((skill, index) => {
                                        return <Chip variant="outlined" label={skill} size="small" key={index} />;
                                    })}
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                                DevOps / Servicios
                            </Typography>
                            <Typography variant="body2" component="div">
                                <div className={classes.skillsTags}>
                                    {devOps.map((skill, index) => {
                                        return <Chip variant="outlined" label={skill} size="small" key={index} />;
                                    })}
                                </div>
                            </Typography>
                            <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                                Cloud Computing
                            </Typography>
                            <Typography variant="body2" component="div">
                                <div className={classes.skillsTags}>
                                    {cloud.map((skill, index) => {
                                        return <Chip variant="outlined" label={skill} size="small" key={index} />;
                                    })}
                                </div>
                            </Typography>
                            <Typography variant="overline" display="block" className={classes.skillsTitle} gutterBottom>
                                Gestión
                            </Typography>
                            <Typography variant="body2" component="div">
                                <div className={classes.skillsTags}>
                                    {manage.map((skill, index) => {
                                        return <Chip variant="outlined" label={skill} size="small" key={index} />;
                                    })}
                                </div>
                            </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default Skills;
