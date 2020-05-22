import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { Post } from '../../types/Post';

const CardPost: React.FC<Post> = (props): React.ReactElement => {
    const { title, excerpt } = props;
    const regex = /(<([^>]+)>)/gi;
    const parsedExcerpt = excerpt.rendered.replace(regex, '');

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Blog
                </Typography>
                <Typography variant="h5" component="h2">
                    {title.rendered}
                </Typography>
                <Typography color="textSecondary">{parsedExcerpt}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>
    );
};

export default CardPost;
