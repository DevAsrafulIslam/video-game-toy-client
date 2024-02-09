import React from "react";

const GameCart = ({ product }) => {
  const { name, id, title, image, price, rating } = product;
  return (
    <div className="border hover:relative">
      <button className="absolute text-white bg-sky-500 px-4 py-2 rounded-lg top-[50%] left-[35%]">
        Buy Now
      </button>
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
