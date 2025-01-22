import React, { useState, useEffect } from 'react';

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
    <div>
      <h2>Albums by Moğollar</h2>
      {albums.length > 0 ? (
        albums.map((album) => (
          <div key={album.id}>
            <h3>{album.title}</h3>
            <p><strong>Year:</strong> {album.year}</p>
            <p><strong>Description:</strong> {album.description}</p>

            {album.images && album.images.length > 0 && (
              <div>
                <strong>Album Images:</strong>
                {album.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${album.title} - Image ${index + 1}`} style={{ maxWidth: "200px", margin: "10px 0" }} />
                  </div>
                ))}
              </div>
            )}

            {album.videos && album.videos.length > 0 && (
              <div>
                <strong>Album Videos:</strong>
                {album.videos.map((video, index) => (
                  <div key={index}>
                    <a href={video} target="_blank" rel="noopener noreferrer">Watch Video {index + 1}</a>
                  </div>
                ))}
              </div>
            )}

            {album.tracks && album.tracks.length > 0 && (
              <div>
                <strong>Tracks:</strong>
                <ul>
                  {album.tracks.map((track) => (
                    <li key={track.trackNumber}>
                      <span><strong>Title:</strong> {track.title}</span><br />
                      <span><strong>Duration:</strong> {track.duration}</span><br />
                      <span><strong>Audio:</strong> <a href={track.url} target="_blank" rel="noopener noreferrer">Listen</a></span><br />

                      {track.images && track.images.length > 0 && (
                        <div>
                          <strong>Track Images:</strong>
                          {track.images.map((image, index) => (
                            <div key={index}>
                              <img src={image} alt={`${track.title} - Image ${index + 1}`} style={{ maxWidth: "200px", margin: "10px 0" }} />
                            </div>
                          ))}
                        </div>
                      )}

                      {track.videos && track.videos.length > 0 && (
                        <div>
                          <strong>Track Videos:</strong>
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
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Loading albums...</p>
      )}
    </div>
  );
}

export default Albums;
