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

    productPriceList.current = basketData?.products.map((p) => {
      return p.totalPrice
    });
    sum.current = productPriceList.current.reduce(function (cnt, o) { return cnt + o; }, 0);

    if (basketData?.products.length === 0) {
      setFinalProducts(null);
    }
    basketData?.products.forEach(product => {

      finalProducts?.map((p) => {
        if (p.id === product.productId) {
          result.push(p)
        };
        setFinalProducts(result);
      })
    });

  }, [basketData])


  return (
    <div className='h-100 p-4 text-center px-14'>
      <LoadingHOC loading={loading}>

        {finalProducts?.length > 0 ? (
          <div className='w-full flex'>
            <section className="m-4 w-3/5">
              {finalProducts?.map((item, index) => {
                return <FinalProduct key={item.id + 'card' + index}
                  cardData={item}
                  defaultQuantity={productQuantityList?.current[index]} />
              })}

            </section>

            <section className="p-4 mt-10 w-2/5">
              <div className="p-2 mb-10">
                <span className='font-medium ml-2'> Total shopping cart: </span>
                <span className='font-medium ml-2 text-xl'>{sum.current} $</span>
              </div>

              <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 py-2 px-4 rounded ml-4">
                Confirm & Complete Your Order
              </button>

            </section>

          </div>) : (
          <section className="m-4 w-full">
            <div className="bg-base-100 p-2 shadow-xl mx-1 my-4 ">
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
