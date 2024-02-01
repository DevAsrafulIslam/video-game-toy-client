import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

import Products from "../Products/Products";

import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import VideoGames from "../VideoGames/VideoGames";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <VideoGames />
      {/* <About></About> */}

      {/* <Products></Products> */}
      <Team></Team>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
