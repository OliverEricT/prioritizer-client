import * as React from 'react';
import './header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideNav from '../side-nav/side-nav';

export default function Header() {
	const [state, setState] = React.useState(false);
	const lists: any[] = ['Inbox', 'Starred', 'Send email', 'Drafts'];

	const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
			console.log(state);
      setState(open);
    };

	return (
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
						onClick={() => toggleDrawer(!state)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prioritizer
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
				<SideNav isOpen={state} onDrawerClick={() => toggleDrawer(state)} lists={lists}/>
      </AppBar>
    </Box>
	);
}