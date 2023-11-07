const ServiceCard = ({ service }) => {
  const { img, title, id, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure> 
      <div className="card-body ">
        <h2 className="card-title">{title}!</h2>
        <div className="flex">
          <p className="text-start text-xl text-[#FF3811]">Price: ${price}</p>
          <button className="btn btn-outline text-[#FF3811] border-[#FF3811] mr-5">
          Buy Now
        </button>        </div>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
