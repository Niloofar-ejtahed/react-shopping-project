import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import UseAsync from '../hooks/useAsync';
import { BASE_URL } from '../constant/url';
import LoadingHOC from '../HOC/loadingHOC';
import FinalProduct from './final-product';

export default function Basket() {

  const basketData = useSelector((state) => state.basket);
  const { getData, data, loading, error } = new UseAsync();
  const productIdList = useRef(null)
  const productQuantityList = useRef(null)
  const result = []

  const [finalProducts ,setFinalProducts] = useState()

  useEffect(() => {
    productIdList.current = basketData?.products.map((p) => {
      return p.productId
    });

    productQuantityList.current = basketData?.products.map((p) => {
      return p.quantity
    });

    getData(BASE_URL + 'products');
  }, []);

  useEffect(() => {
    productIdList?.current.forEach(id => {
      data?.map((p) => {
        if (p.id === id) {
          result.push(p)
        }
        setFinalProducts(result)
      })
    });
  }, [data])


  return (
    <div className='text-center'>
      <LoadingHOC loading={loading}>

        <section className="flex flex-wrap justify-between m-4">
          {finalProducts?.map((item , index) => {
            return <FinalProduct key={item.id + 'card'}
              cardData={item}
              quantity={productQuantityList?.current[index]}/>
          })}

        </section>
      </LoadingHOC>
    </div>

  )
}
