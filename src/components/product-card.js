import React from 'react'

export default function ProductCard({cardData}) {
    return (
            <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure>
                    <img
                        src={cardData.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cardData.title}</h2>
                    <p>{cardData.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
        </div>
    )
}
