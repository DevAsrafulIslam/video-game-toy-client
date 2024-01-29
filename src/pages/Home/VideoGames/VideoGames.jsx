import React, { useEffect, useState } from "react";
import GameCart from "./GameCart";

const VideoGames = () => {
  const [gameProducts, setGameProduct] = useState([]);

  useEffect(() => {
    fetch("games-product.json")
      .then((res) => res.json())
      .then((data) => setGameProduct(data));
  }, []);
  return (
    <div>
      <div className="mt-[130px] text-center">
        <div className="text-start">
          <h2 className="text-[20px]  font-serif">New Arrivals</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto  my-8">
          {gameProducts.map((gameProduct) => (
            <div key={gameProduct.id} product={gameProduct}>
              <div className="border w-9/12 my-2 mx-auto">
                <img className="" src={gameProduct.image} alt="" />
                <p>{gameProduct.name}</p>
                <p>Price: {gameProduct.price}</p>
                <p>Rating: {gameProduct.rating}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" mx-auto mb-[50px] items-center">
          <button className="btn btn-outline text-[#FF3811] border-[#FF3811] mr-5">
            More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoGames;

{
  /* <div className="carousel w-full sm:h-[50vh] md:h-[50vh]">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={img3} className="w-full  rounded-xl" />

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href="#slide3"
          className="hover:btn hover:bg-[#FF3811] btn-circle mr-4"
        >
          ❮
        </a>
        <a href="#slide2" className="hover:btn hover:bg-[#FF3811] btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>; */
}
