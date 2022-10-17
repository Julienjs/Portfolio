import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import PortfolioData from "../../services/PortfolioData.js";
import FontSide from "./FontSide";
import BackSide from "./BackSide";
import Details from "./Details";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Project.css";

const Project = () => {
  const data = PortfolioData;
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  // useEffect(() => {
  //   const callDataSlider = async () => {
  //     try {
  //       const response = await sliderData();
  //       setData(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   callDataSlider();
  // }, []);

  return (
    <section
      id="project"
      className="section flex justify-center items-center min-h-screen border text-black"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSlideChange={(swiper) => {
          setOpen(false);
          setSlideIndex(swiper.activeIndex);
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index + 1}>
            <div
              className={`relative preserve-3d w-full h-full 
               bg-white shadow-2xl shadow-black-box duration-1000
               ${item.fontStyles} 
              ${index === slideIndex ? (open ? "card-md" : "") : null}`}
            >
              {/* div du dessous voir si absolute pose probleme sinon mettre en relative */}
              <div
                className={`imgBox-md md:relative absolute w-full h-full shadow-black-box duration-1000 backface-hidden md:backface-visible ${
                  index === slideIndex ? "boxHover-md" : ""
                }`}
              >
                <FontSide item={item} />
                <BackSide
                  index={index}
                  item={item}
                  slideIndex={slideIndex}
                  setOpen={setOpen}
                />
                {index === slideIndex && (
                  <button
                    onClick={() => setOpen(true)}
                    className={`${item.colorStyles} ${item.beforeStyle} z-10 overflow-hidden font-semibold openBtn border-2 relative left-1/2 top-1/2 -translate-x-1/2 translate-y-[230px] xl:opacity-0 w-36 h-12  hover:text-white hover:scale-110 duration-500 text-2xl rounded-full backface-hidden flex items-center justify-center`}
                  >
                    Ouvrir
                  </button>
                )}
              </div>
              <Details
                item={item}
                setOpen={setOpen}
                index={index}
                slideIndex={slideIndex}
              />
            </div>
            {index === slideIndex && (
              <button
                className={`border border-black text-3xl flex justify-center items-center duration-500 w-12 h-12 rounded-full absolute bottom-0 left-1/2 opacity-0 -translate-x-1/2 translate-y-[130px]
               ${open && "opacity-100 translate-y-[80px]"}
              `}
              >
                <ion-icon
                  onClick={() => setOpen(false)}
                  name="close-outline"
                ></ion-icon>{" "}
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
