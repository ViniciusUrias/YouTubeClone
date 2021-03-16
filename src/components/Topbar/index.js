import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import Notifications from '@material-ui/icons/Notifications';
import Apps from '@material-ui/icons/Apps';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',

    },
    appbar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none'

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    icons: {
        paddingRight: theme.spacing(3),
    },
    logo: {
        height: 25
    }
}));

export default function TopBar({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} color="inherit" position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <img
                        src={
                            theme.palette.type === 'dark'
                                ? '/images/branco.png'
                                : '/images/preto.png'
                        }
                        alt='logo'
                        className={classes.logo}
                    />
                    <div className={classes.root}></div>
                    <Switch
                        value={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className={classes.icons}
                    />
                    <IconButton className={classes.icons} edge="start" aria-label="menu">
                        <VideoCall />
                    </IconButton>

                    <IconButton className={classes.icons} edge="start" aria-label="menu">
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons} edge="start" aria-label="menu">
                        <Notifications />
                    </IconButton>
                    <Avatar></Avatar>
                </Toolbar>

            </AppBar>
        </div>
    );
}
