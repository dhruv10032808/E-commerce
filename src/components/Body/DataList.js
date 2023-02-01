import React,{useContext} from 'react';
import CartContext from '../../Store/cart-context';

const DataList= (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem(props);
  };
  return (
      <li key={props.imageUrl}>
          <h2>{props.title}</h2>
          {<img src={props.imageUrl} alt="Product"/>}
          <div>
              <h3 >{`$${props.price}`}</h3>
              <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
      </li>
  );
}

export default DataList;