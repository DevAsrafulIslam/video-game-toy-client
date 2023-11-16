import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id } = service;

  return (
    <div>
      <h4>Service Book : {title}</h4>
    </div>
  );
};

export default Checkout;
