import React, { useState, useEffect } from "react";

function BandMembers() {
  const [members, setBandMembers] = useState([]);

  useEffect(() => {
    getBandMembers();
  }, []);

  const getBandMembers = () => {
    fetch("http://localhost:3000/members")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Members API not found");
        }
        return response.json();
      })
      .then((data) => setBandMembers(data))
      .catch((error) => console.error("Members API not found", error));
  };

  return (
    <div>
      <h2>Band Members</h2>
      <ul>
        {members.length > 0 ? (
          members.map((member) => (
            <li key={member.id}>
              <p>{member.name}</p>
              <p>{member.role}</p>
              <p>{member.description}</p>

              {/* images dizisi varsa ve 2. öğe mevcutsa göster */}
              {member.images && member.images[1] && (
                <img src={member.images[1]} alt={`${member.name} image`} />
              )}

              {/* videos dizisi varsa öğeleri göster */}
              {member.videos && member.videos.length > 0 && (
                <>
                  {member.videos[0] && (
                    <video src={member.videos[0]} controls>
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {member.videos[1] && (
                    <video src={member.videos[1]} controls>
                      Your browser does not support the video tag.
                    </video>
                  )}
                </>
              )}

              <hr />
            </li>
          ))
        ) : (
          <p>No members found</p>
        )}
      </ul>
    </div>
  );
}

export default BandMembers;

