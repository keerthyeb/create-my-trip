import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar sx={{ ml: 2 }} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={'/'}>
          <Typography variant="h6" component="div" sx={{ color: 'white', justifyContent: 'center', display: 'flex' }}>
            Enchanting Travels
          </Typography>
        </Link>
        <Button variant={'contained'} onClick={() => navigate('/login')}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
