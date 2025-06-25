import React from 'react';

const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-between py-5'>
            <div>
              <h1><span className='text-2xl text-[#003EA4]'>Auction</span><span className='text-2xl text-[#FFD337] font-bold'>Gallery</span></h1>
            </div>

            <div>

                <ul className='flex gap-7'>
                    <li className='text-xl'>Home</li>
                    <li className='text-xl'>Auctions</li>
                    <li className='text-xl'>Categories</li>
                    <li className='text-xl'>How to Work</li>
                </ul>

            </div>

            <div className='flex gap-4'>
                <img src="/noti.png" alt="" />
                <img src="/ppic.png" alt="" />

            </div>
            
        </div>
    );
};

export default Navbar;