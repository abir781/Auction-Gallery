
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Foot from './Components/Foot/Foot'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Prods from './Components/Prods/Prods'
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';



const productspromise=fetch('products.json')
.then(res=>res.json())

function App() {

  const [productlist,setproductlist]=useState([]);
  const [price,setprice]=useState(0);

  const handleproduct=(product)=>{
    
    const newproductlist=[...productlist,product];
    setproductlist(newproductlist);
   
    handleprice(product.currentBidPrice);
    toast("Item Added to your Favorite List")
  }

  const handleprice=(prices)=>{
    
    const newprice=price+prices;
    setprice(newprice);

  }

  const handledelete=(id,amount)=>{
    
    const remainingproduct=productlist.filter(mark=>mark.id!==id);
    setproductlist(remainingproduct);
    const newamount=price-amount;
    setprice(newamount);
    
   
  }
  

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <div className="maincontainer bg-[#EBF0F5]">
      <h1 className='w-10/12 mx-auto pt-20 text-2xl font-semibold'>Active Auctions</h1>
      <p className='w-10/12 mx-auto text-xl font-semibold mt-5 '>Discover and bid on extraordinary items</p>
       <div className="insidecontainer w-10/12 mx-auto flex gap-7 mt-10 pb-25">

       <div className="leftcontainer w-[70%] bg-white rounded-2xl">
          <Suspense fallback={<h3>loading....</h3>}>

          <Products handleproduct={handleproduct} productspromise={productspromise}></Products>

          </Suspense>
        </div>
        <div className="rightcontainer w-[30%] bg-white rounded-2xl h-fit">
          <div className='flex items-center justify-center gap-2 py-2 border-b-1 border-gray-400'>
             <FaRegHeart size={25} />
             <h1 className='text-2xl'>Favorite Items</h1>
             <ToastContainer />
             

          </div>
          {
            productlist.length===0?(
              <div className='text-center  py-7 border-b-1 border-gray-400'>
                <h1 className='text-2xl'>No Favorites yet</h1>
                <p>Click the heart icon on any item to add it to your favorites</p>

              </div>
                 
            ):(

              productlist.map(prod=><Prods key={prod.id} handledelete={handledelete} prod={prod}></Prods>)

            )
           
          }
          <div className='flex justify-between p-4 mt-3 mb-3'>
            <h1 className='font-semibold text-xl'>Total bids Amount: </h1>
            <h1 className='font-semibold text-xl'>${price}</h1>
          </div>

        </div>

       </div>
       
     </div>
     
     <Foot></Foot>
    </>
  )
}

export default App
