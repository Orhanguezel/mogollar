import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PageContainer,
  GradientBackground,
  MemberCard,
  MemberName,
  MemberRole,
  MemberDescription,
} from "./StyledComponents";
import {
  ImageWrapper,
  GifWrapper,
  VideoWrapper,
  LoadingMessage,
} from "./BandMembersStyles";

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

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -200 : 200,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <PageContainer>
      <GradientBackground />
      {members.length > 0 ? (
        members.map((member, index) => (
          <motion.div
            key={member.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <MemberCard>
              <MemberName>{member.name}</MemberName>
              {member.gif && (
                <GifWrapper>
                  <img src={member.gif} alt={`${member.name} gif`} />
                </GifWrapper>
              )}
              <MemberRole>{member.role}</MemberRole>
              <MemberDescription>{member.description}</MemberDescription>

              {member.images && member.images.length > 0 && (
                <ImageWrapper>
                  {member.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${member.name} - Image ${idx + 1}`}
                    />
                  ))}
                </ImageWrapper>
              )}

              {/* Videolar */}
              {member.videos && member.videos.length > 0 && (
                <VideoWrapper>
                  {member.videos.map((video, idx) => (
                    <video key={idx} controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </VideoWrapper>
              )}
            </MemberCard>
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <LoadingMessage>No members found</LoadingMessage>
        </motion.div>
      )}
    </PageContainer>
  );
}

export default BandMembers;
