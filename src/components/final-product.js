import React from 'react'
import { truncate } from '../tools/truncate'
import Rating from './rating';

export default function FinalProduct({ cardData, quantity }) {

    return (
        <div className="flex bg-base-100 w-3/5 p-2 shadow-xl m-1 my-4 shadow-xl ">
            <figure>
                <img src={cardData.image} className="h-32" />
            </figure>
            <div className="card-body p-2 text-left">
                <p className="card-title" style={{ fontSize: '16px' }}>{truncate(cardData.title, 22)}</p>
                <p>{truncate(cardData.description, 60)}</p>
                <div className="card-actions justify-between">
                    <div>
                        <Rating rate={cardData.rating.rate} />
                        <h4 className='font-medium'>{cardData.price}$</h4>
                    </div>

                    <button className="px-3 py-2 mt-2 text-xs font-medium text-center text-white rounded-lg"
                        style={{ backgroundColor: '#DC5F00' }}>x {quantity}</button>

                </div>
            </div>
        </div>
    )
}
