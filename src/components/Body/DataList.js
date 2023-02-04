import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Store/cart-context';

const DataList= (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem(props);
  };
  return (
      <li key={props.imageUrl}>
          <h2>{props.title}</h2>
          {<Link to={`/home/${props.id}`}><img src={props.imageUrl} alt="Product"/></Link>}
          <div>
              <h3 >{`$${props.price}`}</h3>
              <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
      </li>
  );
}

export default DataList;