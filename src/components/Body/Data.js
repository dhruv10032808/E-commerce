import React from "react";
import DataList from "./DataList";
import classes from './Data.module.css'
const Data = () => {
    const productsArr = [

        {
        id:"p1",
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
            id:"p2",
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        id:"p3",
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        id:"p4",

        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
        
        
  const productShow = productsArr.map((item) => {
    return (
      <DataList
        price={item.price}
        title={item.title}
        imageUrl={item.imageUrl}
        key={item.id}
        id={item.id}
      />
      
    );
  });
  return (
    <>
      <ul className={classes.product_ul}>{productShow}</ul>
    </>
  );
};

export default Data;