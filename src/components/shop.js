import React from 'react'
import { useEffect } from 'react'
import ProductCard from './product-card'
import UseAsync from '../hooks/useAsync'
import LoadingHOC from '../HOC/loadingHOC';
import { BASE_URL } from '../constant/url';


export default function Shop() {

  const { getData, data, loading, error } = UseAsync();

  useEffect(() => {
    getData(BASE_URL + 'products');

  }, []);

  return (


    <div className='h-100 bg-neutral-200 p-4 text-center px-14'>

      <LoadingHOC loading={loading}>
        <section className="flex flex-wrap justify-between mx-4">

        </section>

        <section className="flex flex-wrap justify-between mx-4">
          {data?.map((item) => {
            return (
              <ProductCard
                key={item.id + 'card'}
                cardData={item}
              />)
          })
          }
        </section>
      </LoadingHOC>
    </div>
  )
}
