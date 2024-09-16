import React from 'react'
import { useEffect } from 'react'

export default function Shop() {


useEffect(()=>{
  fetch('https://fakestoreapi.com/products',{
    method : 'Get',
  }).then(res=>res.json())
  .then(json=>console.log(json))
})

  return (
    <div>Shop</div>
  )
}
