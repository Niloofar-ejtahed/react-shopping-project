import React from 'react'
import Rating from './rating'
import { useSelector } from 'react-redux';

export default function BasketPopup(props) {

    const data = props?.productData
    const quantity =props?.quantity

    const basketData = useSelector((state) => state.basket);

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box flex">

                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="w-1/4 ">
                    <img className="w-60 rounded-lg mx-auto" src={data?.image} />
                </div>

                <div className="w-3/4 text-left">
                    <h2 className="text-2xl font-semibold">{data?.title}</h2>
                    {/* <Rating rate={data?.rating?.rate} />
                    <p>{data?.rating?.rate}/5</p> */}
                    <h4 className='text-2xl font-medium py-4'>{data?.price}$</h4>

                    <a className="mt-6 cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">
                        {data?.category}
                    </a>

                    <p>{quantity}</p>

                </div>
            </div>

        </dialog>
    )
}
