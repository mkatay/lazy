export const generateRandArray = (min,max,length) =>{
    const arr=Array.from({length:length},(_)=>Math.floor(Math.random()*(max-min))+min)
    const set=new Set(arr)
    return Array.from(set)
}

import axios from "axios"

export const getData=async ({queryKey})=>{
    console.log(queryKey);
    const url=queryKey[1]
    const resp = await axios.get(url)
    return resp.data
}