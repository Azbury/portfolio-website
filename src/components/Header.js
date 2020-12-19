import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import PersonIcon from '@material-ui/icons/Person';

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
}));

export default function Header(props) {
  const classes = useStyles();

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
                                        behavior: "smooth"
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
              Skills <CodeIcon fontSize="large" className="navbar-icon"/>
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
              Contact Info <PersonIcon fontSize="large" className="navbar-icon"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}