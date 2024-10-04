import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import UseAsync from '../hooks/useAsync';
import { BASE_URL } from '../constant/url';
import LoadingHOC from '../HOC/loadingHOC';
import FinalProduct from './final-product';
import { useNavigate } from 'react-router-dom';

export default function Basket() {

  const basketData = useSelector((state) => state.basket);
  const { getData, data, loading, error } = new UseAsync();
  const navigate = useNavigate();
  const productIdList = useRef(null)
  const productQuantityList = useRef(null)
  const productPriceList = useRef(null)
  const sum = useRef(null)
  const result = []

  const [finalProducts, setFinalProducts] = useState()

  useEffect(() => {
    productIdList.current = basketData?.products.map((p) => {
      return p.productId
    });

    productQuantityList.current = basketData?.products.map((p) => {
      return p.quantity
    });

    productPriceList.current = basketData?.products.map((p) => {
      return p.totalPrice
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


  useEffect(() => {
    basketData?.products.forEach(product => {
      finalProducts?.map((p) => {
        if (p.id === product.productId) {
          result.push(p)
        };
        setFinalProducts(result);
      })
    });

  }, [basketData?.products])


  return (
    <div className='text-center flex'>
      <LoadingHOC loading={loading}>

        {finalProducts?.length > 0 ? (
          <div className='w-full flex'>
            <section className="m-4 w-3/5">
              {finalProducts?.map((item, index) => {
                return <FinalProduct key={item.id + 'card'}
                  cardData={item}
                  defaultQuantity={productQuantityList?.current[index]} />
              })}

            </section>

            <section className="m-4 w-2/5">
              <div className="bg-base-100 p-2 shadow-xl m-1 my-4 shadow-xl ">
                <span className='font-medium ml-2'> total = </span>
                <span>{sum.current} $</span>
              </div>
            </section>

          </div>) : (
          <section className="m-4 w-full">
            <div className="bg-base-100 p-2 shadow-xl m-1 my-4 shadow-xl ">
              <h1 className='text-xl font-semibold mb-4'>Your shopping cart is empty!</h1>
              <p>You can go to the following pages to see more products</p>
              <button className="mt-4 bg-transparent hover:bg-orange-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded"
                onClick={() => {
                  navigate("/shop")
                }}>
                See more Products
              </button>
            </div>
          </section>
        )}




      </LoadingHOC>
    </div >

  )
}
