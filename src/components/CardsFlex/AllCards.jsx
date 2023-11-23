import React, { useState } from 'react'
import "./style.css"
import Cards from './Cards'
import { list } from '../../assets/CardsList'

function AllCards() {
    
  return <div className='cards-flex'>

    {list.map((card,i)=>(
        <Cards card={card} key={i} />
    ))}
    </div>

}

export default AllCards