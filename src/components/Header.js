import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: '999'
  },
  menuButton: {
    '&:hover': {
      background: "none",
      boxShadow: "inset 0 -0.175em black,inset 0 -0.2em #000",
      borderRadius: "0"
    }
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: "100vw",
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className="toolbar">
          <div className="dropdowns">
            <IconButton onClick={(e) => { 
                                    e.preventDefault()
                                    props.homeScrollReference.current.scrollIntoView({
                                        behavior: "smooth"
                                    }) 
                                }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              Home <HomeIcon fontSize="large" className="navbar-icon"/>
            </IconButton>
            <IconButton onClick={(e) => { 
                                    e.preventDefault()
                                    props.aboutMeScrollReference.current.scrollIntoView({
                                        behavior: "smooth",
                                    }) 
                                }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              About Myself <PersonIcon fontSize="large" className="navbar-icon"/>
            </IconButton>
            <IconButton onClick={(e) => { 
                                    e.preventDefault()
                                    props.experienceScrollReference.current.scrollIntoView({
                                        behavior: "smooth"
                                    }) 
                                }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              Experience <BuildIcon fontSize="large" className="navbar-icon"/>
            </IconButton>
            <IconButton onClick={(e) => { 
                                    e.preventDefault()
                                    props.skillsScrollReference.current.scrollIntoView({
                                        behavior: "smooth"
                                    }) 
                                }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              Skills <DeviceHubIcon fontSize="large" className="navbar-icon"/>
            </IconButton>
            <IconButton onClick={(e) => { 
                                    e.preventDefault()
                                    props.projectsScrollReference.current.scrollIntoView({
                                        behavior: "smooth"
                                    }) 
                                }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              Projects <CodeIcon fontSize="large" className="navbar-icon"/>
            </IconButton>
            <IconButton onClick={(e) => { 
                                    e.preventDefault()
                                    props.footerScrollReference.current.scrollIntoView({
                                          behavior: "smooth"
                                    }) 
                                }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              Contact Info <PhoneIcon fontSize="large" className="navbar-icon"/>
            </IconButton>
          </div>
          <IconButton onClick={toggleDrawer('right', true)} className={classes.menuButton} color="inherit" aria-label="menu" id="menu-button">
            <MenuIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </AppBar>
    </div>
  );
}