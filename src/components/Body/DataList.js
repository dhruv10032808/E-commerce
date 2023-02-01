import React from 'react';

const DataList= (props) => {
  return (
      <li key={props.imageUrl}>
          <h2>{props.title}</h2>
          {<img src={props.imageUrl} alt="Product"/>}
          <div>
              <h3 >{`$${props.price}`}</h3>
              <button>Add to Cart</button>
          </div>
      </li>
  );
}

export default DataList;