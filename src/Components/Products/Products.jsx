import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({productspromise,handleproduct}) => {
    
    const products=use(productspromise);
    
    return (
        <div className='p-10'>
           
            <table className='table-auto w-full  overflow-hidden beorder-collapse'>

            <thead>
                <tr className="border-2 text-left">
                 <th className="p-4 ">Item</th>
                 <th className="p-4 ">Current Bid</th>
                 <th className="p-4 ">Time Left</th>
                 <th className="p-4  ">Bid Now</th>
                </tr>

                </thead>
                <tbody>

                {
                products.map(product=><Product key={product.id} handleproduct={handleproduct} product={product}></Product>)
            }

                </tbody>

           

            </table>
          
            
        </div>
    );
};

export default Products;