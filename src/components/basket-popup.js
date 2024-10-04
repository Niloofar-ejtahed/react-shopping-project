import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function BasketPopup(props) {

    const data = props?.productData;
    const quantity = props?.quantity;
    const navigate = useNavigate();

    function handleGoToBasket() {
        navigate('/basket')
    }

    return (
        <dialog id="my_modal_3" className="modal" >
            <div className="modal-box flex">

                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="w-1/4 mr-4">
                    <img className="w-60 rounded-lg mx-auto" src={data?.image} />
                </div>

                <div className="w-3/4 text-left">

                    <div className='text-success font-medium pb-4'>This product has been added to the cart!</div>

                    <h2 className="font-semibold">{data?.title}</h2>

                    <h4 className='text-xl font-medium py-4'>{data?.price}$</h4>

                    <div className='flex justify-between'>
                        <div
                            className="rounded-full bg-orange-500 p-2 text-center" style={{ width: '40px' }}>
                            {quantity}
                        </div>
                        <button className="bg-gray-300 hover:bg-orange-400 text-gray-800  py-2 px-4 rounded ml-4"
                            onClick={handleGoToBasket}>Go to Basket</button>
                    </div>


                </div>
            </div>

        </dialog>
    )
}
