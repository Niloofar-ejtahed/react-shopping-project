import React from 'react'
import { useEffect } from 'react'
import ProductCard from './product-card'
import UseAsync from '../hooks/useAsync'


export default function Shop() {

  const { getData, data, error } = UseAsync();

  useEffect(() => {
    getData('https://fakestoreapi.com/products');
  }, []);
  
  return (
    <div>
      <section className="flex flex-wrap justify-between mx-4">
        {data?.map((item)=>{
          return(
            <ProductCard
            key={item.id +'card'}
            cardData={item}
            />)
        })
        }
      </section>
    </div>
  )
}
