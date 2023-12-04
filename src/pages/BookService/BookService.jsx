import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, img } = service;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleBookService = (event) => {
    event.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email?.value;
    const price = form.price?.value;

    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service book successfully");
        }
      });
  };
  return (
    <form onSubmit={handleBookService} className="card-body">
      <h2 className="text-center text-2xl text-[#fb1313]">
        Services : {service?.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="form-control">
          <input
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            // required
          />
        </div>
        <div className="form-control">
          <input
            type="date"
            name="date"
            placeholder=""
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="input input-bordered"
            // required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="price"
            placeholder="Due amount"
            defaultValue={"$" + service.price}
            className="input input-bordered"
            // required
          />
        </div>
      </div>
      <div className="form-control">
        <input
          type="message"
          //   name="message"
          placeholder="Your Message"
          className="input input-bordered"
          //   required
        />
      </div>
      <div className="form-control mt-6 grid grid-cols-2 gap-2">
        {/* <button className="btn btn-primary">Login</button> */}
        <input
          onClick={() => navigate(-1)}
          className="btn btn-active  bg-[#FF3811] text-white"
          value="Go Back"
        />
        <input
          className="btn btn-active  bg-[#20a229] text-white"
          type="submit"
          value="Order Confirm"
        />
      </div>
    </form>
  );
};

export default BookService;
