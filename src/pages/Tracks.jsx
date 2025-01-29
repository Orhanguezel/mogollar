import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PageContainer,
  GradientBackground,
  AlbumContainer,
  AlbumTitle,
  TrackList,
  TrackItem,
  TrackDetails,
  TrackImageContainer,
  TrackImage,
  TrackLink,
  NoTracksMessage,
} from "./StyledComponents"; 

function Tracks() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = () => {
    fetch("http://localhost:3000/albums")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Albums not found");
        }
        return response.json();
      })
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
            <AlbumContainer>
              <AlbumTitle>{album.title}</AlbumTitle>
              {album.tracks && album.tracks.length > 0 ? (
                <TrackList>
                  {album.tracks.map((track) => (
                    <TrackItem key={track.trackNumber}>
                      <TrackDetails>
                        <span>
                          <strong>Title:</strong> {track.title}
                        </span>
                        <br />
                        <span>
                          <strong>Duration:</strong> {track.duration}
                        </span>
                        <br />
                        <span>
                          <strong>Audio:</strong>{" "}
                          <TrackLink
                            href={track.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Listen
                          </TrackLink>
                        </span>
                      </TrackDetails>
                      {track.images && track.images.length > 0 && (
                        <TrackImageContainer>
                          <strong>Images:</strong>
                          {track.images.map((image, index) => (
                            <TrackImage
                              key={index}
                              src={image}
                              alt={`${track.title} - Image ${index + 1}`}
                            />
                          ))}
                        </TrackImageContainer>
                      )}
                      {track.videos && track.videos.length > 0 && (
                        <div>
                          <strong>Videos:</strong>
                          {track.videos.map((video, index) => (
                            <TrackLink
                              key={index}
                              href={video}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Watch Video {index + 1}
                            </TrackLink>
                          ))}
                        </div>
                      )}
                    </TrackItem>
                  ))}
                </TrackList>
              ) : (
                <NoTracksMessage>No tracks available for this album.</NoTracksMessage>
              )}
            </AlbumContainer>
          </motion.div>
        ))
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Loading albums...
        </motion.p>
      )}
    </PageContainer>
  );
}

export default Tracks;
