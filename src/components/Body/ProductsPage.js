import {Link} from 'react-router-dom'
import React from 'react'
import abc from './abc.webp'
const ProductsPage=()=>{
   return <ul>
    <Link to='/products/product-1'><img src={abc} style={{width:350,height:350}} alt='t-shirt'></img></Link>
    <Link to='/products/product-2'><li>Product 2</li></Link>
    <Link to='/products/product-3'><li>Product 3</li></Link>
   </ul>
}
export default ProductsPage;