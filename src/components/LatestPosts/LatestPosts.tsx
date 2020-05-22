import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, CircularProgress, Typography } from '@material-ui/core/';
import CardPost from '../CardPost';
import commonClasses from '../../styles/common.module.scss';
import { Post } from '../../types/Post';

const LatestPosts: React.FC = (): React.ReactElement => {
    const [posts, setPosts] = useState([] as Array<Post>);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://alvaroveliz.cl/wp-json/wp/v2/posts?per_page=4');
                setPosts(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Typography variant="overline" display="block" gutterBottom>
                Últimos posts
            </Typography>
            <Grid container spacing={2}>
                {isLoading ? (
                    <div className={commonClasses.loader}>
                        <CircularProgress />
                    </div>
                ) : (
                    posts.map((post, index) => {
                        return (
                            <Grid item xs={6} key={index}>
                                <CardPost {...post} />
                            </Grid>
                        );
                    })
                )}
            </Grid>
        </>
    );
};

export default LatestPosts;
