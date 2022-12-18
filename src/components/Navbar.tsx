import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              component={RouterLink} 
              to="/"
            >
              <CollectionsBookmarkIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bookshelf app
            </Typography>
            
          <Button color="inherit" onClick={() => navigate('/books')}>Books</Button>
          <Button color="inherit" onClick={() => navigate('/sign-in')}>LogIn</Button>
          <Button color="inherit" onClick={() => navigate('/sign-up')}>Sign-Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar