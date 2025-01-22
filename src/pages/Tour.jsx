
function Tour() {
  return (
    <div>
      
    </div>
  )
}

export default Tour


import React, { useState, useEffect } from 'react'

function BandMembers() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = () => {
    fetch("http://localhost:3000/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Albums Api not found", error));
  };
  
  return (
    <div >
      <ul >
        {albums.map((album) => (
          <li
            key={album.id}
          >
            <span>{album.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BandMembers
