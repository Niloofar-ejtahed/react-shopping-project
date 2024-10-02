import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import { BASE_URL } from "../constant/url";
import Rating from "./rating";
import LoadingHOC from "../HOC/loadingHOC";
import { UserContext } from "../context/user-context";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import BasketPopup from "./basket-popup";
import { createPortal } from "react-dom";

export default function ProductItem() {

  const basketData = useSelector((state) => state.basket);

  const [orderNum, setOrderNum] = useState(1);
  const params = useParams();
  const { getData, data, loading } = useAsync();
  const navigate = useNavigate();

  const [addToBasket, setAddToBasket] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);

  const sendRequest = (userId, date, products) => {
    getData(BASE_URL + 'carts', 'POST', {
      userId: userId,
      date: date,
      products: products
    });
  }

  useEffect(() => {
    console.log('avalesh', productData.current)

    if (basketData.products.length > 0) {
      basketData?.products.find(p => {
        if (p.productId === +params.productId) {
          console.log('دکمه حذف بشه')
          setOrderNum(p.quantity);
          setShowAddButton(false);
        }

      })
      // setAddToBasket(true);
      document.getElementById('my_modal_3')?.showModal()
    }
  }, [basketData.products]);

  const value = useContext(UserContext);
  const dispatch = useDispatch();

  const productData = useRef(null)
  useEffect(() => {
    getData(BASE_URL + 'products/' + params.productId);

  }, []);

  return (
    <div className="h-100 text-center">
      <LoadingHOC loading={loading}>
        <div className="flex p-10">

          <div className="w-1/4 ">
            <img className="w-60 rounded-lg mx-auto" src={data?.image} />
          </div>

          <div className="w-3/4 text-left">
            <h2 className="text-2xl font-semibold">{data?.title}</h2>

            {data?.rating ?
              (<div>
                <Rating rate={data?.rating.rate} />
                <p>{data?.rating?.rate}/5</p>
              </div>):''}



            <h4 className='text-2xl font-medium py-4'>{data?.price}$</h4>
            <p>{data?.description}</p>

            <a onClick={() => {
              navigate('/shop/' + data?.category.replace(/\s+/g, '-').toLowerCase())
            }} className="mt-6 cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">
              {data?.category}
            </a>


            <div className="mt-10">
              <div className="inline-flex">
                <button className="bg-gray-300 hover:bg-orange-400 text-gray-800  py-2 px-4 rounded-l" onClick={(e) => {
                  setOrderNum((prev) => prev - 1);
                  dispatch({
                    type: "addToBasketState",
                    payload: {
                      products: basketData.products.map((p) =>
                        p.productId == +params?.productId ?
                          productData.current = { productId: +params.productId, quantity: p.quantity - 1 }
                          : p
                      )
                    },
                  });
                }} disabled={orderNum == 1}>
                  -
                </button>

                <button className="bg-gray-300 py-2 px-4">
                  {orderNum}
                </button>

                <button className="bg-gray-300 hover:bg-orange-400 text-gray-800  py-2 px-4 rounded-r" onClick={(e) => {
                  setOrderNum((prev) => prev + 1);
                  dispatch({
                    type: "addToBasketState",
                    payload: {
                      products: basketData.products.map((p) =>

                        p.productId == +params?.productId ?
                          productData.current = { productId: +params.productId, quantity: p.quantity + 1 }
                          : p
                      )
                    },
                  });
                }} disabled={orderNum == 3}>
                  +
                </button>
              </div>


              {showAddButton == true ?
                (<button  className="bg-orange-400 hover:bg-orange-500 text-gray-800  py-2 px-4 rounded ml-4" onClick={(e) => {
                  productData.current = { productId: +params.productId, quantity: orderNum }
                  let currentDate = moment().format('YYYY-MM-DD');
                  dispatch({
                    type: "addToBasketState",
                    payload: {
                      userId: +localStorage.getItem('userId'),
                      date: currentDate,
                      products: [...basketData.products, productData.current]
                    },
                  });

                  // sendRequest(+localStorage.getItem('userId'),currentDate,[...basketData.products, productData.current])


                  // navigate('/basket')
                  setAddToBasket(true)

                }}>Add to Basket</button>)
                : ''
              }

            </div>





            {createPortal(
              <div id="create-portal" >
                {addToBasket == true ? (
                  <BasketPopup productData={data} quantity={orderNum} />
                ) : ''}

              </div>,
              document.body

            )}

          </div>
        </div>
      </LoadingHOC>
    </div>
  );
}
