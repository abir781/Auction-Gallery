import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(/Banner-min.jpg)] bg-cover bg-center h-[750px] w-full flex items-center'>
            <div className='w-10/12 mx-auto '>
                <h1 className='text-white text-3xl font-bold'>Bid on Unique Items from<br></br> Around the World</h1>
                <p className='text-white text-xl mt-5'>Discover rare collectibles, luxury goods, and vintage<br></br> treasures in our curated auctions</p>
                <button className='bg-white py-3 px-7 mt-5 rounded-3xl '>Explore Auctions</button>
            </div>
            
            
        </div>
    );
};

export default Banner;