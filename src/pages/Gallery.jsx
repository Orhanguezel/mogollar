import { useState, useEffect } from "react";
import {
  PageContainer,
  GradientBackground,
  GridContainer,
} from "./StyledComponents"; 
import { AnimatedImageWrapper, AnimatedGalleryImage } from "./GalleryStyles"; 

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGalleryImages();
  }, []);

  const getGalleryImages = () => {
    fetch("http://localhost:3000/albums")
      .then((response) => response.json())
      .then((data) => {
        const allImages = [];


        data.forEach((album) => {
          if (album.images && album.images.length > 0) {
            allImages.push(...album.images);
          }


          if (album.tracks && album.tracks.length > 0) {
            album.tracks.forEach((track) => {
              if (track.images && track.images.length > 0) {
                allImages.push(...track.images);
              }
            });
          }
        });

        setImages(allImages);
      })
      .catch((error) => console.error("Gallery API not found", error));
  };

  return (
    <PageContainer>
      <GradientBackground />
      <GridContainer>
        {images.map((image, index) => (
          <AnimatedImageWrapper key={index}>
            <AnimatedGalleryImage
              src={image}
              alt={`Gallery item ${index + 1}`}
            />
          </AnimatedImageWrapper>
        ))}
      </GridContainer>
    </PageContainer>
  );
}

export default Gallery;
