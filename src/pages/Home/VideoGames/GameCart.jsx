import React from "react";

const GameCart = ({ gameProduct }) => {
  const { id, title, image, price, rating } = gameProduct;

  return <div>{title}</div>;
};

export default GameCart;
