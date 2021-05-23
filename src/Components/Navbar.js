import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';
import { Sidebar } from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: '1px 16px 20px rgb(0 0 0 / 17%)!important',
    position:'fixed',
    width: '100%',
    zIndex: '10000',
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  
}));

export const Navbar = () =>{
  const classes = useStyles();
  return (
    <div className={classes.root}>  
      <AppBar  position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Switch Experience
          </Typography>
          <Sidebar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

