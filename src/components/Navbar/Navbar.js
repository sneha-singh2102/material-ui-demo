import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { mainNavbarItems } from './../../testdata/navbar';
import { navbarStyles } from './styles';
import { useNavigate } from "react-router-dom";

const Navbar = () =>{

// All constants and methods go here
 const navigate = useNavigate();

    return(
        <Drawer
                  sx={navbarStyles.drawer}
                  variant="permanent"
                  anchor="left"
              >
                <Toolbar />
                <Divider />
                <List>
                  {mainNavbarItems.map((item, index) => (
                    <ListItem
                        button
                        key={item.id}
                        onClick={() => navigate(item.route)}
                    >
                      <ListItemIcon
                        sx={navbarStyles.icons}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        sx={navbarStyles.text}
                        primary={item.label}
                      />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
    );
};
export default Navbar;