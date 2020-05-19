import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, CircularProgress } from '@material-ui/core/';
import CardPost from '../CardPost';
import commonClasses from '../../styles/common.module.scss';

const LatestPosts: React.FC = (): React.ReactElement => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://alvaroveliz.cl/wp-json/wp/v2/posts?per_page=4');
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
            <Grid container spacing={2}>
                {isLoading ? (
                    <div className={commonClasses.loader}>
                        <CircularProgress />
                    </div>
                ) : (
                    posts.map((post) => (
                        <Grid item xs={6}>
                            <CardPost post={post} />
                        </Grid>
                    ))
                )}
            </Grid>
        </>
    );
};

export default LatestPosts;
