import img1 from "../../../assets/images/banner/22.jpg";
import img2 from "../../../assets/images/banner/3.png";
import img3 from "../../../assets/images/banner/1.png";
const Banner = () => {
  return (
    <div className="carousel w-full sm:h-[50vh] md:h-[50vh]">
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
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="hover:btn  hover:bg-[#FF3811] btn-circle mr-4"
          >
            ❮
          </a>
          <a href="#slide3" className="hover:btn hover:bg-[#FF3811] btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />

        <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="hover:btn hover:bg-[#FF3811] btn-circle mr-4"
          >
            ❮
          </a>
          <a href="#slide1" className="hover:btn hover:bg-[#FF3811] btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
