import React, { useEffect,useState } from 'react';
import {FaDollarSign} from 'react-icons/fa';
import ListButtons from './ListButtons';

export default function ProductList() {
    const [productData, setProductData] = useState([]);
    
    useEffect(()=>{
        let data;
        const fetchData = async ()=>{
            data = await fetch('https://dummyjson.com/products').then(el=>el.json());
            // data.products = data.products.filter((el)=> el.title !== 'OPPOF19');
            setProductData(data.products);
            console.log('Data inside useeffect', productData);
        }
        fetchData();
        console.log(productData);
    },[])
  return (
    <div className='productList'>
        <section className='cards'>
        {productData.map((el)=>{
            return(
                <div className={`card product_${el.id}`}>
                    <div className="card_image">
                        <img src={el.images[0]} alt={el.title} />
                    </div>
                    <div className="card_content">
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                        <h1>${el.price}</h1>
                    </div>
                    <ListButtons productId={el.id}/>
                </div>
            )
        })}
        </section>
    </div>
  )
}
