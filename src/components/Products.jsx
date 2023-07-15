import React from 'react'
import { useQuery } from 'react-query';
import {useNavigate} from 'react-router-dom'
import { getData } from '../utils';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const urlProducts='https://raw.githubusercontent.com/kmagdi/json_images/main/products'

export const Products = () => {
    const { data,status, isLoading, isError } = useQuery(['products', urlProducts], getData);
    const navigate=useNavigate()

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error occurred while fetching images</div>;
    }
    status=='success' && console.log(data.products);
  
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,margin:'5px auto'}}>
      <List>
          { status=='success' && data.products.map(obj => 
           <ListItem disablePadding key={obj.id}>
            <ListItemButton className='list-btn' onClick={()=>navigate('/lazy/products/'+obj.id)}>
              <ListItemText primary={obj.name} /> 
            </ListItemButton>
          </ListItem>
          )}
         
        </List>
    </Box>
  )
}


