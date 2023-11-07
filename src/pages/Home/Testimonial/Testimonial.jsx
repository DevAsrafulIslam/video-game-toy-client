import qut from "../../../assets/icons/quote.svg";
const Testimonial = () => {
  return (
    <div className="mt-[130px] text-center">
      <div className="text-center">
        <h4 className="text-[#FF3811] font-bold ">Testimonial</h4>
        <h2 className="text-[45px]  font-serif">What Customer Says</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-12 items-center mx-auto">
        <div className="w-2/3 rounded-md mx-auto border py-12 px-4">
          <div className="flex items-center gap-4">
            <img
              className="w-16 rounded-full"
              src="https://i.ibb.co/SxyGWtS/Premium-Photo-Front-view-man-with-laptop-looking-at-camera.jpg"
              alt=""
            />
            <div>
              <h3 className="text-2xl font-bold">Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
            <div>
              <img className="w-12" src={qut} alt="" />
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="w-2/3 rounded-md mx-auto border py-12 px-4">
          <div className="flex items-center gap-4">
            <img
              className="w-16 rounded-full"
              src="https://i.ibb.co/SxyGWtS/Premium-Photo-Front-view-man-with-laptop-looking-at-camera.jpg"
              alt=""
            />
            <div>
              <h3 className="text-2xl font-bold">Awlad Hossain</h3>
              <p>Businessman</p>
            </div>
            <div>
              <img className="w-12" src={qut} alt="" />
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
