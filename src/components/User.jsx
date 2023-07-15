import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const User=({loggedInUser})=> {
  return (
    <Stack direction="row" spacing={2} sx={{justifyContent:'center'}} >
      <Avatar alt={loggedInUser} src=""  title={loggedInUser}/>
    </Stack>
  );
}