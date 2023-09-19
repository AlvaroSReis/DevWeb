import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './googleLogin/login';
import HeaderButton from './headerbutton/headerbutton';



export default function Header() {
  // eslint-disable-next-line
  const [anchorElNav, setAnchorElNav] = useState(null);

  // eslint-disable-next-line
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //
  return (
      <AppBar >
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography 
          variant="h4" 
          component="div" 
          sx={{ displayFlex: '',flexGrow: 1 }}>
            Dados Carteira de Trabalho e Previdência Social
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <HeaderButton name='Consultas' route='/' onclick={handleCloseNavMenu}/>
            <HeaderButton name='Mapa' route='/mapaUsuarios' onclick={handleCloseNavMenu}/>
          </Box>
          <Login/>
        </Toolbar>
        </Container>
      </AppBar>
  );
}
