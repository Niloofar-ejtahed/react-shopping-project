import React, { useRef, useState } from 'react'
import { truncate } from '../tools/truncate'
import Rating from './rating';
import { useDispatch, useSelector } from 'react-redux';

export default function FinalProduct({ cardData, defaultQuantity }) {

    const [quantity, setQuantity] = useState(defaultQuantity);
    const basketData = useSelector((state) => state.basket);
    const dispatch = useDispatch();
    const updateQuantity = useRef(null);

    function handleDecrease() {
        setQuantity((prev) => prev - 1);
        updateQuantity.current = basketData?.products.map((p) => p.productId === cardData.id ?
            { productId: cardData.id, quantity: quantity - 1, totalPrice: (cardData?.price * (quantity - 1)) }
            : p
        );
        dispatch({
            type: "addToBasketState",
            payload: {
                products: updateQuantity.current
            },
        })
    }

    function handleIncrease() {
        setQuantity((prev) => prev + 1);
        updateQuantity.current = basketData?.products.map((p) => p.productId === cardData.id ?
            { productId: cardData.id, quantity: quantity + 1, totalPrice: (cardData?.price * (quantity + 1)) }
            : p
        );
        dispatch({
            type: "addToBasketState",
            payload: {
                products: updateQuantity.current
            },
        })
    }

    function deleteClick(id) {
        dispatch({
            type: "addToBasketState",
            payload: {
                products: basketData?.products.filter((item) => item.productId !== id)
            },
        })
    }

    return (
        <div className="flex bg-base-100 p-2 shadow-xl m-1 my-4 shadow-xl " style={{ position: 'relative' }}>
            <figure>
                <img src={cardData.image} className="h-32" />
            </figure>
            <button onClick={() => deleteClick(cardData.id)} style={{
                position: 'absolute', top: '15px',
                right: '28px'
            }}>
                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <div className="card-body p-2 text-left">
                <p className="card-title" style={{ fontSize: '16px' }}>{truncate(cardData.title, 22)}</p>
                <p>{truncate(cardData.description, 60)}</p>
                <div className="card-actions justify-between">
                    <div>
                        <Rating rate={cardData.rating.rate} />
                        <h4 className='font-medium'>{cardData.price}$</h4>
                    </div>

                    <div className="mt-4 flex align-items">

                        <h1 className="pr-4 pb-1 mt-2 text-2xl font-medium">{cardData.price * quantity} $</h1>

                        <div className="inline-flex mx-4" style={{ height: '40px' }}>
                            <button className="bg-gray-300 hover:bg-orange-400 text-gray-800  py-1 px-4 rounded-l"
                                onClick={handleDecrease} disabled={quantity === 1}> - </button>
                            <button className="bg-gray-300 py-1 px-4">
                                {quantity}
                            </button>
                            <button className="bg-gray-300 hover:bg-orange-400 text-gray-800  py-1 px-4 rounded-r"
                                onClick={handleIncrease} disabled={quantity === 3}> + </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
