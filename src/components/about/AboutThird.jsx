import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper";
import { Backdrop, Fade, Modal } from "@mui/material";
// styles
import "./aboutthird.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
// store
import certification from "../../store/certification";

const AboutThird = () => {
  /* certificate item modal */
  const [openModal, setOpenModal] = useState(false);
  const [modalFiltered, setModalFiltered] = useState([]);

  const filterModal = (itemID) => {
    setModalFiltered(
      certification.filter((value) => {
        return value.id === itemID;
      })
    );
  };
  /* certificate item modal */

  return (
    <>
      <section>
        <h5>What I achieved</h5>
        <h2>Certifications</h2>

        <Swiper
          breakpoints={{
            240: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            600: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
          }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="container certificate__container"
        >
          {certification.map((cert, index) => {
            return (
              <SwiperSlide key={index} className="certificate__item">
                {cert.images.map((image, index) => {
                  if (index === 0) {
                    return <img src={image.image} alt={image.alt} />;
                  }
                  return null;
                })}
                <div
                  onClick={() => {
                    setOpenModal(true);
                    filterModal(cert.id);
                  }}
                  className="certificate__title"
                >
                  <h4>{cert.name}</h4>
                  <small>{cert.type}</small>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <ModalView
        openModal={openModal}
        data={modalFiltered}
        closeModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default AboutThird;

function ModalView({ openModal, data, closeModal }) {
  return (
    <>
      {data.map((cert, index) => {
        return (
          <Modal
            key={index}
            open={openModal}
            onClose={closeModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 400,
            }}
          >
            <Fade in={openModal}>
              <div className="container modal__container-cert">
                <Swiper
                  effect={"cards"}
                  slidesPerView={"auto"}
                  centeredSlides={true}
                  spaceBetween={20}
                  grabCursor={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, EffectCards]}
                >
                  {cert.images.map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={image.image} alt={image.alt} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Fade>
          </Modal>
        );
      })}
    </>
  );
}
