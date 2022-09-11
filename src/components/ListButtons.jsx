import React from 'react';
import {FaCartPlus} from 'react-icons/fa';
import {CgDetailsMore} from 'react-icons/cg';
import { Link } from 'react-router-dom';


export default function ListButtons({productId}) {
  return (
    <div className='listButtons'>
        <button className='add_cart'><FaCartPlus/>Add to Cart</button>
        <Link to={`product/${productId}`}>
            <button className='view_details'><CgDetailsMore/>View Details</button>
        </Link>
    </div>
  )
}
