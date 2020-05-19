import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core/';

interface Props {
    post: any;
}

const CardPost: React.FC<Props> = (props): React.ReactElement => {
    const { id, date, link, title, content, excerpt } = props.post;
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
