import React from 'react';
import {FaCartPlus} from 'react-icons/fa';
import {CgDetailsMore} from 'react-icons/cg';


export default function ListButtons() {
  return (
    <div className='listButtons'>
        <button className='add_cart'><FaCartPlus/>Add to Cart</button>
        <button className='view_details'><CgDetailsMore/>View Details</button>
    </div>
  )
}
