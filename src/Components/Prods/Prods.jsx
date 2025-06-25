import React from 'react';
import { IoClose } from "react-icons/io5";

const Prods = ({prod,handledelete}) => {
    
    return (
        <div className='flex items-center justify-between p-4 border-b-1 border-gray-400'>
            <div>
                <img className='w-20 h-20' src={prod.image} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='font-semibold'>{prod.title}</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='font-semibold'>${prod.currentBidPrice}</h1>
                    <h1 className='font-semibold'>Bids:{prod.bidsCount}</h1>
                </div>

            </div>
            <div>

                <button onClick={()=>handledelete(prod.id,prod.currentBidPrice)}><IoClose /></button>

            </div>
            
        </div>
    );
};

export default Prods;