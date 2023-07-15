import React from 'react'
import Button from '@mui/material/Button';

export const Logout = ({setIsLoggedIn}) => {
  return (
    <div>
       <Button  type="button" 
        onClick={()=>setIsLoggedIn(false)}
       > Logout   </Button>
    </div>
  )
}

