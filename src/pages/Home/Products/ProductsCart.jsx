import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, title, image, price, rating } = product;
  console.log(product);
  return (
    <div className=" mx-auto px-4 py-4 border rounded-lg overflow-hidden text-center ">
      <img className="rounded-md w-96" src={image} />
      <Rating
        className="text-2xl"
        placeholderRating={rating}
        emptySymbol={<FaRegStar></FaRegStar>}
        placeholderSymbol={<FaStar className="text-[#e49904]"></FaStar>}
        fullSymbol={<FaStar />}
      />
      <h1 className="text-2xl"> {title}</h1>
      <p className="text-[#FF3811]">Price: ${price}</p>
    </div>
  );
};

export default ProductCard;
