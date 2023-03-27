import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, seller, ratings } = props.product;
  console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name ? name : "No Data Found"}</h6>
        <p>Price: ${price ? price : "No Data Found"} </p>
        <p>Manufacturer: {seller ? seller : "No Data Found"}</p>
        <p>Rating: {ratings ? ratings : "No Data Found"} stars</p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
