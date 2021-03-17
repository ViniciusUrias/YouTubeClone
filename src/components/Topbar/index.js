import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import Notifications from '@material-ui/icons/Notifications';
import Apps from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
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
        paddingRight: theme.spacing(6),
    },
    logo: {
        height: 25
    },
    input: {
        width: 200,
        border: '1px solid #e0e0e0',
        flex: 1,

    },
    inputDark: {
        border: '1px solid #9e9e9e',
        flex: 1

    },
    switch: {
        marginRight: theme.spacing(10)
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

                    <Input
                        disableUnderline={true}
                        placeholder="  Pesquisar..."
                        classes={{ root: theme.palette.type === "light" ? classes.input : classes.inputDark }}
                    ></Input>
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                    <div className={classes.root}></div>
                    <Switch
                        className={classes.switch}
                        value={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
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
                    <Avatar src={'/images/pp.jpg'}></Avatar>
                </Toolbar>

            </AppBar>
        </div>
    );
}
