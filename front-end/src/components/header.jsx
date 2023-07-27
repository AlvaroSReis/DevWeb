import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './googleLogin/login';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Dados Carteira de Trabalho e Previdência Social - CTPS 2020 a 2022
          </Typography>
          <Login/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}