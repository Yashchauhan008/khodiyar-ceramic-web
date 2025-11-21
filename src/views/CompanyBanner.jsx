import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dummy images
const images = [
    slider1,
    slider2,
    slider3,
    slider4
];

const CompanyBanner = () => {
    return (
        <div className="relative w-full mx-auto overflow-hidden">
            {/* Custom pagination dot color */}
            <style>{`
        .swiper-pagination-bullet {
          background-color: var(--color-primary) !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--color-accent) !important;
          opacity: 1;
        }
      `}</style>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000, // 5 seconds
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-[250px] sm:h-[350px] md:h-[480px] lg:h-[600px]"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CompanyBanner;
