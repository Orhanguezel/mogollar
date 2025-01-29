import {
  PageContainer,
  GradientBackground,
  
  SectionTitle,
  
} from "./StyledComponents";

import {
  ContactWrapper,
  ContactCard,
  StyledAnchor,
  StyledStrong,
  StyledListItem,
  StyledList,
  ContactText,
  Form,
  Label,
} from "./ContactStyles";

import { motion } from "framer-motion";

function Contact() {
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "right" ? 300 : -300,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <PageContainer>
      <GradientBackground />
      <ContactText>
        We’d love to hear from you! Feel free to reach out through any of the
        following methods.
      </ContactText>

      <ContactWrapper>
        <motion.div
          initial="hidden"
          animate="visible"
          custom="right"
          variants={cardVariants}
        >
          <ContactCard>
            <SectionTitle>Contact Information</SectionTitle>
            <StyledList>
              <StyledListItem>
                <StyledStrong>Email:</StyledStrong>{" "}
                <StyledAnchor href="mailto:info@mogollar.com">
                  info@mogollar.com
                </StyledAnchor>
              </StyledListItem>
              <StyledListItem>
                <StyledStrong>Phone:</StyledStrong> +90 212 555 1234
              </StyledListItem>
              <StyledListItem>
                <StyledStrong>Address:</StyledStrong> Istiklal Street, No: 123,
                Istanbul, Turkey
              </StyledListItem>
            </StyledList>
          </ContactCard>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom="left"
          variants={cardVariants}
        >
          <ContactCard>
            <SectionTitle>Follow Us</SectionTitle>
            <StyledList>
              <StyledListItem>
                <StyledAnchor
                  href="https://www.facebook.com/mogollar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </StyledAnchor>
              </StyledListItem>
              <StyledListItem>
                <StyledAnchor
                  href="https://www.twitter.com/mogollar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </StyledAnchor>
              </StyledListItem>
              <StyledListItem>
                <StyledAnchor
                  href="https://www.instagram.com/mogollar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </StyledAnchor>
              </StyledListItem>
            </StyledList>
          </ContactCard>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom="right"
          variants={cardVariants}
        >
          <ContactCard>
            <SectionTitle>Send Us a Message</SectionTitle>
            <Form>
              <Label>
                <span>Name:</span>
                <input type="text" name="name" placeholder="Enter your name" />
              </Label>
              <Label>
                <span>Email:</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </Label>
              <Label>
                <span>Message:</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </Label>
              <button type="submit">Send</button>
            </Form>
          </ContactCard>
        </motion.div>
      </ContactWrapper>
    </PageContainer>
  );
}

export default Contact;
