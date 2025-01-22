import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("http://localhost:3000/url");
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Verileri çekerken hata oluştu:", error);
      }
    };

    fetchSlides();
  }, []);

  

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Mor Arka Plan */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-gray-900 to-indigo-500 -z-10"></div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto my-0 p-0 bg-gray-900">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <AnimatePresence key={slide.id}>
              {currentSlide === index && (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={slide.link}
                    alt={slide.title}
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Dinamik Yazılar */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg">
                    <motion.div
                      className="bg-black bg-opacity-40 px-6 py-4 rounded-lg"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center text-white">
                        {slide.title}
                      </h1>
                      <p className="mt-6 text-lg sm:text-xl font-extrabold leading-8 max-w-2xl text-center text-white">
                        {slide.description}
                      </p>
                    </motion.div>
                    <div className="mt-10 flex gap-6">
                      <a
                        href="/albums"
                        className="rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 z-10"
                      >
                        Albümleri Keşfet
                      </a>
                      <a
                        href="/contact"
                        className="rounded-md border border-gray-300 px-5 py-3 text-lg font-semibold text-gray-300 hover:text-white hover:border-white  hover:bg-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                      >
                        İletişim
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </Slider>
      </div>
    </div>
  );
}
