import React from 'react';

const Foot = () => {
    return (
        <div className='text-center py-25 space-y-4'>
             <h1><span className='text-2xl text-[#003EA4]'>Auction</span><span className='text-2xl text-[#FFD337] font-bold'>Gallery</span></h1>
             <h2 className='font-semibold text-xl'><span className='mr-2'>Bid.</span>      <span className='mr-2'>Win.</span>  <span>Own.</span></h2>
             <ul className='flex gap-7 justify-center'>
                    <li >Home</li>
                    <li >Auctions</li>
                    <li >Categories</li>
                    <li >How to Work</li>
                </ul>
                <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Foot;