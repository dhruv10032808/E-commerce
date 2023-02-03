import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetail=()=>{
   const param=useParams();
   return (
    <div>
        <h1>{param.productId}</h1>
        <span>Price:399</span>
        <h3>Reviews</h3>
        <p>Comfortable but a bit of cheap material 4/5</p>
    </div>
   )
}
export default ProductDetail;