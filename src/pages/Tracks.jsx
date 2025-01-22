import React, { useState, useEffect } from "react";

function Tracks() {
  const [albums, setAlbums] = useState([]); // Albüm listesini tut

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
      .then((data) => setAlbums(data)) // Albümleri state'e ata
      .catch((error) => console.error("Albums API not found", error));
  };

  return (
    <div>
      <h2>Tracks by Albums</h2>
      {albums.length > 0 ? (
        albums.map((album) => (
          <div key={album.id}>
            <h3>Album: {album.title}</h3>
            {album.tracks && album.tracks.length > 0 ? (
              <ul>
                {album.tracks.map((track) => (
                  <li key={track.trackNumber}>
                    <span><strong>Title:</strong> {track.title}</span><br />
                    <span><strong>Duration:</strong> {track.duration}</span><br />
                    <span><strong>Audio:</strong> <a href={track.url} target="_blank" rel="noopener noreferrer">Listen</a></span><br />
                    {track.images && track.images.length > 0 && (
                      <div>
                        <strong>Images:</strong>
                        {track.images.map((image, index) => (
                          <div key={index}>
                            <img src={image} alt={`${track.title} - Image ${index + 1}`} style={{ maxWidth: "200px", margin: "10px 0" }} />
                          </div>
                        ))}
                      </div>
                    )}
                    {track.videos && track.videos.length > 0 && (
                      <div>
                        <strong>Videos:</strong>
                        {track.videos.map((video, index) => (
                          <div key={index}>
                            <a href={video} target="_blank" rel="noopener noreferrer">Watch Video {index + 1}</a>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tracks available for this album.</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading albums...</p>
      )}
    </div>
  );
}

export default Tracks;
