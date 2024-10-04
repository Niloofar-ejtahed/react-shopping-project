import React, { useEffect } from 'react'
import UseAsync from '../hooks/useAsync';
import ProductCard from './product-card';
import LoadingHOC from '../HOC/loadingHOC';
import { BASE_URL } from '../constant/url';

export default function ElectronicsProducts() {

  const { getData, data, loading, error } = UseAsync();

  useEffect(() => {
    getData(BASE_URL + 'products/category/electronics');
  }, []);

  return (
    <div className='text-center'>
      <LoadingHOC loading={loading}>

        <section className="flex flex-wrap justify-between mx-4">
          {data?.map((item) => {
            return <ProductCard key={item.id + 'card-elec'}
              cardData={item} />
          })}

        </section>
      </LoadingHOC>
    </div>

  )
}
