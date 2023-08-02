import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './googleLogin/login';
import Breadcrumbs  from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

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
          <Link marginLeft="10px" underline="hover" color="inherit" href="">
            Análise de dados da CTPS
          </Link>
          <Link underline="hover" color="inherit" href="">
            Mapa da localização dos usuários do portal
          </Link>
        </Breadcrumbs>
      </AppBar>
  </Box>
  );
}