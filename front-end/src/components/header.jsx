import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './googleLogin/login';
import Breadcrumbs  from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} position="fixed" zIndex={999999}>
      <AppBar >
        <Toolbar >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Dados Carteira de Trabalho e Previdência Social - CTPS 2020 a 2022
          </Typography>
          <Login/>
        </Toolbar>
        <Breadcrumbs aria-label="breadcrumb" separator="-"
        style={{background: '#77a7eb', color: 'white', padding: '2px'}}>

          <Link style={{marginLeft: '15px', textDecoration: 'none', color: 'inherit'}} 
          to="/">Analise de Dados CTPS</Link>

          <Link style={{textDecoration: 'none', color: 'inherit'}}
          to="/mapaUsuarios">Mapa da localização dos usuarios</Link>
          
        </Breadcrumbs>
      </AppBar>
  </Box>
  );
}