import React from 'react'
import { getFilteredData } from '../utils';
import {useParams} from 'react-router-dom'
import { useQuery } from 'react-query';
import {motion} from 'framer-motion'
import { MediaCard } from './MediaCard';

const urlProducts='https://raw.githubusercontent.com/kmagdi/json_images/main/products'

export const Product=()=> {
    const params = useParams()
    console.log('url paraméter:',params)
    const { data,status, isLoading, isError } = useQuery(['product', urlProducts,params.id], getFilteredData);

    status=='success'  && console.log(data);
  return (
    <motion.div initial={{x:'100vw'}} 
                animate={{x:0}} 
                transition={{delay:0.2,type:"spring",stiffness:40}}>
          {status=='success' && <MediaCard {...data[0]}/>}
    </motion.div>
  )
}
