import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import DraftsIcon from '@material-ui/icons/Drafts';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <Route to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}


export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Header></Header>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <Router>
          <List>

          <ListItem button component={Link} to="/">
            <ListItemIcon>
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button component={Link} to="/customers">
            <ListItemIcon>
            <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>

          <ListItem button component={Link} to="/">
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>

          <ListItem button component={Link} to="/">
            <ListItemIcon>
            <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>

          </List>
          <Divider />
  
          <List>

          <ListItem button component={Link} to="/">
            <ListItemIcon>
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button component={Link} to="/">
            <ListItemIcon>
            <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button component={Link} to="/">
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>

          <ListItem button component={Link} to="/">
            <ListItemIcon>
            <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>

          </List>
          </Router>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
       <Main></Main>

      </main>
    </div>
  );
}
