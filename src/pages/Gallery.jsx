import React, { useState, useEffect } from 'react';

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

        // Albüm resimlerini ekle
        data.forEach(album => {
          if (album.images && album.images.length > 0) {
            allImages.push(...album.images);
          }

          // Şarkı resimlerini ekle
          if (album.tracks && album.tracks.length > 0) {
            album.tracks.forEach(track => {
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
    <div>
      <h2>Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
