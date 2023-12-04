import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, id, price } = service;
  return (
    <div className="mx-auto px-4 py-4 border rounded-lg overflow-hidden text-center">
      <figure className="">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}!</h2>
        <div className="flex">
          <p className="text-start text-[18px] text-[#FF3811]">
            Price: ${price}
          </p>
          <Link to={`/book/${_id}`}>
            <button className="btn btn-outline text-[#FF3811] border-[#FF3811] mr-5">
              Book Now
            </button>
          </Link>
        </div>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
