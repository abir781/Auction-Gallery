import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa'; 


const Product = ({product,handleproduct}) => {
    const [clicked,setclicked]=useState(false);
    
    const handleclicked = () =>{
        if(clicked===false){
            setclicked(true);
        }
        handleproduct(product);
    }
    return (
        

          
              
                
                    <tr className='border-2'>
                       
                        <td className="p-4 ">
                            <div className='flex items-center gap-4'>

                            <img src={product.image} alt="Leica Camera" className="w-16 h-16 object-cover rounded" />
                            <span className='font-semibold'>{product.title}</span>

                            </div>
                            
                         </td>
                        <td className="p-4 font-semibold">${product.currentBidPrice}</td>
                        <td className="p-4 font-semibold">{product.timeLeft}</td>
                        <td className='p-4'><button className={clicked?'cursor-not-allowed':'cursor-pointer'} onClick={handleclicked} disabled={clicked}>

                           
                           {
                            clicked ?(
                                <FaHeart size={25} className="text-red-500" />
                            ):(
                                <CiHeart size={25} />

                            )
                           } 
                            </button>
                        </td>
                        
                    </tr>
                
            

            
            
            
            
            
        
    );
};

export default Product;