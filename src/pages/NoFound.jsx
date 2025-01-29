
import { motion } from "framer-motion";
import {
  PageContainer,
  GradientBackground,
  NoFoundTitle,
  NoFoundMessage,
  BackButton,
} from "./StyledComponents";

function NoFound() {
  return (
   <PageContainer>
    <GradientBackground />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <NoFoundTitle>404 - Page Not Found</NoFoundTitle>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <NoFoundMessage>
          Oops! The page you are looking for does not exist or has been moved.
        </NoFoundMessage>
      </motion.div>


      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <BackButton href="/">Go Back to Home</BackButton>
      </motion.div>
    </PageContainer>
  );
}

export default NoFound;
