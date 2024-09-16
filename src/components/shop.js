import React from 'react'
import { useEffect } from 'react'
import ProductCard from './product-card'


export default function Shop() {


useEffect(()=>{
  fetch('https://fakestoreapi.com/products',{
    method : 'Get',
  }).then(res=>res.json())
  .then(json=>console.log(json))
})

  return (
    <div>
      <ProductCard/>
    </div>
  )
}
