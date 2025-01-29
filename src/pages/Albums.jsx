import { useState, useEffect } from "react";
import {
  PageContainer,
  GradientBackground,
  AlbumCard,
  AlbumTitle,
  Info,
  ImageContainer,
  Image,
  TrackList,
} from "./StyledComponents"; 
import {
  AlbumSectionTitle,
  VideoContainer,
  TrackItem,
  LoadingMessage,
} from "./AlbumStyles"; 
import { motion } from "framer-motion"; 

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = () => {
    fetch("http://localhost:3000/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Albums API not found", error));
  };

  return (
    <PageContainer>
      <GradientBackground />
      
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        {albums.length > 0 ? (
          albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
            >
              <AlbumCard>
                <AlbumTitle>{album.title}</AlbumTitle>
                <Info>
                  <strong>Year:</strong> {album.year}
                </Info>
                <Info>
                  <strong>Description:</strong> {album.description}
                </Info>
                {album.images && album.images.length > 0 && (
                  <ImageContainer>
                    <AlbumSectionTitle>Album Images</AlbumSectionTitle>
                    {album.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`${album.title} - Image ${index + 1}`}
                      />
                    ))}
                  </ImageContainer>
                )}
                {album.videos && album.videos.length > 0 && (
                  <VideoContainer>
                    <AlbumSectionTitle>Album Videos</AlbumSectionTitle>
                    {album.videos.map((video, index) => (
                      <a
                        key={index}
                        href={video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Video {index + 1}
                      </a>
                    ))}
                  </VideoContainer>
                )}
                {album.tracks && album.tracks.length > 0 && (
                  <TrackList>
                    <AlbumSectionTitle>Tracks</AlbumSectionTitle>
                    {album.tracks.map((track) => (
                      <TrackItem key={track.trackNumber}>
                        <span>
                          <strong>Title:</strong> {track.title}
                        </span>
                        <span>
                          <strong>Duration:</strong> {track.duration}
                        </span>
                        <span>
                          <strong>Audio:</strong>{" "}
                          <a
                            href={track.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Listen
                          </a>
                        </span>
                      </TrackItem>
                    ))}
                  </TrackList>
                )}
              </AlbumCard>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <LoadingMessage>Loading albums...</LoadingMessage>
          </motion.div>
        )}
    </PageContainer>
  );
}

export default Albums;
