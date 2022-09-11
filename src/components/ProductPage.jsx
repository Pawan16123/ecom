import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {MdPayment} from 'react-icons/md'

export default function ProductPage() {
    let data;
   const {id} = useParams();
   const [reqProduct, setReqProduct] = useState(null);
   useEffect(()=>{
    const fetchData = async ()=>{
        data = await fetch('https://dummyjson.com/products').then(el=>el.json());
        data = data.products.find(el=> el.id===Number(id));
        setReqProduct(data);
    }
    fetchData();
   },[])
   console.log(reqProduct);
  return (
    <div className="productPage">
        <div className="img_container">
            <div className="highlightedImage">
                {reqProduct && <img src={reqProduct.images[1]} alt={reqProduct?.title} />}
            </div>
            <div className="subImage">
                {reqProduct?.images.map((el)=>
                    <img src={el} alt={reqProduct?.title} />
                )}
            </div>
        </div>
        <div className="content_contianer">
            <p>Brand: {reqProduct?.brand}</p>
            <p>Category: {reqProduct?.category}</p>
            <p>Rating: {reqProduct?.rating}</p>
            <p>Stock: {reqProduct?.stock}</p>
            <h1>{id} - {reqProduct?.title}</h1>
            <button className='buyNow'><MdPayment/>Buy Now</button>
        </div>

    </div>
  )
}
