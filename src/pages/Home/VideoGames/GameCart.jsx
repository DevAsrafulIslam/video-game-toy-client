import React from "react";

const GameCart = ({ product }) => {
  const { name, id, title, image, price, rating } = product;
  return (
    <div className="border ">
      <img className="w-full  mx-auto" src={image} alt="" />
      <div className="grid">
        {name}
        <p>Price:{product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default GameCart;
