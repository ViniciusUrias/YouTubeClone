import React from 'react';
import {
    Box,
    Grid,
    Toolbar,
    Typography
} from '@material-ui/core';
const videos = [
    {
        id: 1,
        title:
            'System Of A Down - Chop Suey! (Official Video)',
        channel: 'System of a Down',
        views: '1.030.604.603 visualizações',
        date: '3 de out. de 2009',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.jpg',
    },
    {
        id: 2,
        title:
            'System Of A Down - Toxicity (Official Video)',
        channel: 'System of a Down',
        views: '531.509.999 visualizações',
        date: '2 de out. de 2009',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.jpg',
    },
    {
        id: 3,
        title:
            'System Of A Down - Question! (Official Video)',
        channel: 'System of a Down',
        views: '83.218.570 visualizações',
        date: '3 de out. de 2009',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.jpg',
    },
    {
        id: 4,
        title:
            'System Of A Down - B.Y.O.B. (Official Video)',
        channel: 'System of a Down',
        views: '354.985.993 visualizações',
        date: '3 de out. de 2009',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.jpg',
    },
    {
        id: 5,
        title:
            'In The End [Official HD Music Video] - Linkin Park',
        channel: 'Linkin Park',
        views: '1.160.079.364 visualizações',
        date: '26 de out. de 2009',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.jpg',
    },
    {
        id: 6,
        title: 'Faint [Official Music Video] - Linkin Park',
        channel: 'Linkin Park',
        views: '305.649.867 visualizações',
        date: '23 de out. de 2009',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.jpg',
    },
    {
        id: 7,
        title:
            'Crawling [Official HD Music Video] - Linkin Park',
        channel: 'Linkin Park',
        views: '311.948.349 visualizações',
        date: '23 de out. de 2009',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.jpg',
    },
    {
        id: 8,
        title:
            'Waiting For The End [Official Music Video] - Linkin Park',
        channel: 'Linkin Park',
        views: '198.798.333 visualizações',
        date: '9 de out. de 2010',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.jpg',
    },

];


export default function Cards() {
    return (
        <Box p={5}>
            <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }} >
                Recomendados
            </Typography>
            <Grid container spacing={4}>

                {videos.map((item, index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <img
                                style={{ width: '100%' }}
                                alt={item.title}
                                src={item.thumb}
                            />
                            <Box>
                                <Typography
                                    style={{ fontWeight: 600 }}
                                    gutterBottom
                                    variant='body1'
                                    color='textPrimary'
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    display='block'
                                    variant='body2'
                                    color='textSecondary'
                                >
                                    {item.channel}
                                </Typography>
                                <Typography variant='body2' color='textSecondary'>
                                    {`${item.views} • ${item.date}`}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}