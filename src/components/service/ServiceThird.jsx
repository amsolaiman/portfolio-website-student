import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// store
import testimonial from "../../store/testimonial";
// assets
import { FaQuoteRight } from "react-icons/fa";
// styles
import "swiper/css";
import "./servicethird.scss";

const ServiceThird = () => {
  return (
    <section>
      <h5>What others say</h5>
      <h2>Testimonials</h2>

      <div className="testimonial__container">
        <Swiper
          breakpoints={{
            240: {
              spaceBetween: 100,
            },
            600: {
              spaceBetween: 120,
            },
            980: {
              spaceBetween: 200,
            },
          }}
          allowTouchMove={false}
          slidesPerView={"auto"}
          loop={true}
          centeredSlides={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {testimonial.map(
            ({ name, job, organization, testimonial }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial__item">
                  <div className="testimonial__content">
                    <FaQuoteRight className="qoute" />
                    <p>{testimonial}</p>
                  </div>

                  <div className="testimonial__info">
                    <h3>{name}</h3>
                    <div>{job}</div>
                    <div>{organization}</div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceThird;
