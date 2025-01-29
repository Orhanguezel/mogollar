import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  PageContainer,
  GradientBackground,
  SliderContainer,
  SlideImage,
  SlideContent,
  SlideTitle,
  SlideDescription,
  ButtonGroup,
  Button,
  ArrowButton,
} from "./HomeComponents";

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

  const SampleNextArrow = ({ onClick }) => (
    <ArrowButton direction="right" onClick={onClick}>
      ❯
    </ArrowButton>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <ArrowButton direction="left" onClick={onClick}>
      ❮
    </ArrowButton>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <PageContainer>
      <GradientBackground />
      <SliderContainer>
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
                  <SlideImage src={slide.link} alt={slide.title} />
                  <SlideContent>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 1.2 }}
                    >
                      <SlideTitle>{slide.title}</SlideTitle>
                      <SlideDescription>{slide.description}</SlideDescription>
                    </motion.div>


                    <ButtonGroup>
                      <Button href="/albums" primary animate>
                        Albümleri Keşfet
                      </Button>
                      <Button href="/contact" animate>
                        İletişim
                      </Button>
                    </ButtonGroup>
                  </SlideContent>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </Slider>
      </SliderContainer>
    </PageContainer>
  );
}
