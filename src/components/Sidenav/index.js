import React from 'react';
import {
    Drawer,
    Toolbar,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    List,
    makeStyles,
    Avatar,
    ListSubheader,
    Box,
    Hidden
} from '@material-ui/core'
import Whatshot from '@material-ui/icons/Whatshot';
import Home from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import AccessTime from '@material-ui/icons/AccessTime';
import ThumbUp from '@material-ui/icons/ThumbUp';
import YouTube from '@material-ui/icons/YouTube';
import Theaters from '@material-ui/icons/Theaters';
import SportsEsports from '@material-ui/icons/SportsEsports';
import LiveTv from '@material-ui/icons/LiveTv';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import SportsSoccer from '@material-ui/icons/SportsSoccer';
import Settings from '@material-ui/icons/Settings';
import Flag from '@material-ui/icons/Flag';
import Help from '@material-ui/icons/Help';
import Feedback from '@material-ui/icons/Feedback';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        padding: 10
    },
    drawerPaper: {
        width: drawerWidth,
        borderRight: 'none',
        flexShrink: 0
    },
    drawerContainer: {
        overflow: 'auto',
    },
    listItemText: {
        fontSize: 14,
        marginRight: 10
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    listSubHeader: {
        fontWeight: 700,
        textAlign: 'flex',

    }
}));

const subscriptions = [{
    id: 1,
    channel: "TechLab",
},
{
    id: 2,
    channel: "Felipe Deschamps",
},
{
    id: 3,
    channel: "Lucas Montano",
},
{
    id: 4,
    channel: "Bronziocre",
}];
const drawerWidth = 240;

export default function SideNav() {
    const classes = useStyles();
    return (
        <Box display="flex">
            <Hidden>
                <Drawer

                    SlideProps={{ direction: 'right' }}
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button >
                                <ListItemIcon><Home /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Início'} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><Whatshot /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Em Alta'} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><Subscriptions /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }} primary={'Inscrições'} />
                            </ListItem>
                        </List>

                        <Divider />

                        <List>
                            <ListItem button >
                                <ListItemIcon><VideoLibrary /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={'Biblioteca'} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><History /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Histórico"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><PlayCircleFilled /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Seus Vídeos"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><AccessTime /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Assistir mais tarde"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><ThumbUp /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Vídeos marcados como gostei"} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListSubheader classes={{ root: classes.listSubHeader }}>INSCRIÇÔES</ListSubheader>
                            {subscriptions.map((item, index) => (
                                <ListItem button>
                                    <Avatar alt={item.channel} className={classes.small} ></Avatar>
                                    <ListItemText style={{ marginLeft: 24 }} classes={{ primary: classes.listItemText }} primary={item.channel}></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            <ListSubheader classes={{ root: classes.listSubHeader }}>MAIS DO YOUTUBE</ListSubheader>

                            <ListItem button >
                                <ListItemIcon><YouTube /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={'YouTube Premium'} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><Theaters /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Filmes"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><SportsEsports /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Jogos"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><LiveTv /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Ao Vivo"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><EmojiObjects /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Aprender"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><SportsSoccer /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Esportes"} />
                            </ListItem>
                        </List>
                        <Divider />

                        <List>
                            <ListSubheader classes={{ root: classes.listSubHeader }}>MAIS DO YOUTUBE</ListSubheader>

                            <ListItem button >
                                <ListItemIcon><Settings /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={'Configurações'} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><Flag /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Histórico de denúncias"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><Help /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Ajuda"} />
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><Feedback /></ListItemIcon>
                                <ListItemText classes={{ primary: classes.listItemText }} primary={"Enviar feedback"} />
                            </ListItem>

                        </List>


                    </div>
                </Drawer >
            </Hidden>
        </Box>

    )
}