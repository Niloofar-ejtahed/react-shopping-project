import React from 'react'
import { truncate } from '../tools/truncate'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ cardData }) {

    const navigate = useNavigate();

    return (
        <div className="card card-compact bg-base-100 w-72 p-4 shadow-xl m-1 my-4">
            <figure>
                <img src={cardData.image} className="h-32" />
            </figure>
            <div className="card-body">
                <h6 className="card-title">{truncate(cardData.title, 30)}</h6>
                <p>{truncate(cardData.description, 60)}</p>
                <div className="card-actions justify-between">
                    <h4 className='font-medium'>{cardData.price}</h4>
                    <button className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                        navigate("/shop/" + cardData.id);
                    }}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
