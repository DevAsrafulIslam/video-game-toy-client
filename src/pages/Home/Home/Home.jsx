import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Products></Products>
      <Team></Team>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
