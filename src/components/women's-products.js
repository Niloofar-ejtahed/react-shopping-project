import React, { useEffect } from 'react'
import UseAsync from '../hooks/useAsync';
import ProductCard from './product-card';
import LoadingHOC from '../HOC/loadingHOC';

export default function WomenProducts() {
  const { getData, data, loading, error } = UseAsync();

  useEffect(() => {
    getData("https://fakestoreapi.com/products/category/women's%20clothing");
  }, []);

  return (
    <div className='text-center'>
      <LoadingHOC loading={loading}>

        <section className="flex flex-wrap justify-between mx-4">


          {data?.map((item) => {
            return <ProductCard key={item.id + 'card'}
              cardData={item} />
          })}

        </section>

      </LoadingHOC>
    </div>

  )
}
