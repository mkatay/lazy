import React,{useState} from 'react'
import { questions } from '../data_faq'
import { Question } from './Question'


export const Faq = () => {
    const [faq,setFaq]=useState(questions)
    
  return (
    <div className='questions'>
       {faq.map(obj=>
        <Question key={obj.id} {...obj} />
        )}
    </div>
  )
}

