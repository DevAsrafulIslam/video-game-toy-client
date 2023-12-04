import icon1 from "../../../assets/icons/check.svg";
import icon2 from "../../../assets/icons/deliveryt.svg";
import icon3 from "../../../assets/icons/person.svg";
import icon4 from "../../../assets/icons/group.svg";
import icon5 from "../../../assets/icons/Wrench.svg";
const Features = () => {
  return (
    <div className="mt-[130px] text-center">
      <div className="text-center">
        <h4 className="text-[#FF3811] font-bold ">Core Features</h4>
        <h2 className="text-[45px]  font-serif">Why Choose Us</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5  my-8">
        <div className="border rounded-md  py-6 ">
          <img className="mx-auto" src={icon1} alt="" />
          <h3 className="mt-4">Expert Team</h3>
        </div>
        <div className="border rounded-md  py-6 text-center">
          <img className="mx-auto" src={icon2} alt="" />
          <h3 className="mt-4">Expert Team</h3>
        </div>
        <div className="border bg-[#FF3811] rounded-md  py-6 text-center">
          <img className="mx-auto" src={icon3} alt="" />
          <h3 className="mt-4 text-white">Expert Team</h3>
        </div>
        <div className="border rounded-md  py-6 text-center">
          <img className="mx-auto" src={icon4} alt="" />
          <h3 className="mt-4">Expert Team</h3>
        </div>
        <div className="border rounded-md  py-6 text-center">
          <img className="mx-auto" src={icon5} alt="" />
          <h3 className="mt-4">Expert Team</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
