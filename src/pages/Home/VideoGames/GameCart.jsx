import React from "react";

const GameCart = ({ product }) => {
  const { name, id, title, image, price, rating } = product;
  return (
    <div className="border ">
      <img className="w-full  mx-auto" src={image} alt="" />
      <div className="flex text-start items-center justify-around">
        {name}
        <span className="grid justify-around">
          <p>Price:{product.price}</p>
          <p>Rating: {product.rating}</p>
        </span>
      </div>
    </div>
  );
};

export default GameCart;
