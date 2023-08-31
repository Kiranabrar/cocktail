import React from 'react'
import { add } from '../store/cartSlice';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';


const Products = () => {
  const dispatch= useDispatch();

const [products, setproducts] = useState([]);

useEffect(() => {
  
  const fetchProducts=async()=>{
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();
    console.log(data);
    setproducts(data);
  }
  fetchProducts();
}, [])
  
  const handleAdd=(product)=>{
  dispatch(add(product));

  };

  return (
    <div className='productsWrapper'>
        {
            products.map(product=>(
                <div className='card  ' key={product.id}>
                  <img src={product.image} alt=''/>
                  <h6>{product.title}</h6>
                  <h6>{product.price}</h6>
                  <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products