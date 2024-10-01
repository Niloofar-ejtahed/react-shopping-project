import React from 'react'
import { truncate } from '../tools/truncate'
import { useNavigate } from 'react-router-dom';
import Rating from './rating';

export default function ProductCard({ cardData }) {

    const navigate = useNavigate();

    return (
        <div className="card card-compact bg-base-100 w-64 p-2 shadow-xl m-1 my-4 shadow-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300">
            <figure>
                <img src={cardData.image} className="h-32" />
            </figure>
            <div className="card-body p-2 text-left">
                <p className="card-title"  style={{fontSize:'16px'}}>{truncate(cardData.title, 22)}</p>
                <p>{truncate(cardData.description, 60)}</p>
                <div className="card-actions justify-between">
                    <div>
                        <Rating rate={cardData.rating.rate} />
                        <h4 className='font-medium'>{cardData.price}$</h4>
                    </div>

                    <button className="px-3 py-2 mt-2 text-xs font-medium text-center text-white rounded-lg" onClick={() => {
                        navigate("/shop/" + cardData.id);
                    }} style={{backgroundColor:'#DC5F00'}}>Buy Now</button>

                </div>
            </div>
        </div>
    )
}
