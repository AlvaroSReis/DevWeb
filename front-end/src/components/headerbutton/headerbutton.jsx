//import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

export default function HeaderButton({ name, route, onclick}) {
  return (
    <Button
    
      variant="outlined"
      onClick={onclick}
      sx={{
        "&.Mui-selected": {},
        "&.Mui-focusVisible": {
          border: "3px solid #FFFFFF"
        },
        ":focus": {
          border: "3px solid #FFFFFF"
        },
        my: 2,
        color: 'white',
        display: 'block',
        fontWeight:'bold',
        fontSize: 24,
        marginLeft: '15px',
        textDecoration: 'none'
      }}
      as={Link}
      to={route}
    >
     {name}
    </Button>
  );
}

/*
 <Link style={{marginLeft: '15px', textDecoration: 'none', color: "inherit", fontWeight:'bold', fontSize: 24}} to={route} >
      {name}
    </Link>
*/