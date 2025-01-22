import React, { useState, useEffect } from 'react'

function BandMembers() {
  const [members, setBandMembers] = useState([]);

  useEffect(() => {
    getBandMembers();
  }, []);

  const getBandMembers = () => {
    fetch("http://localhost:3000/members")
      .then((response) => response.json())
      .then((data) => setBandMembers(data))
      .catch((error) => console.error("Members Api not found", error));
  };
  
  return (
    <div >
      <ul >
        {members.map((member) => (
          <li
            key={member.id}
          >
            <span>{member.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BandMembers
