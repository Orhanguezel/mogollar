import styled, { css } from "styled-components";

// Sayfa ve genel arka plan
export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #4c1d95, #000, #4c1d95);
  z-index: -1;
`;

// Slider ve görüntüler
export const SliderContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const SlideContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Şeffaf siyah arka plan */
  padding: 20px;
`;

export const SlideTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  max-width: 800px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Butonlar
export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.a`
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: transform 0.3s, background-color 0.3s;
  animation: ${(props) => (props.animate ? "scaleInOut 1.5s infinite" : "none")};

  @keyframes scaleInOut {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  ${(props) =>
    props.primary
      ? css`
          background-color: #6366f1;
          &:hover {
            background-color: #4338ca;
            transform: scale(1.05);
          }
        `
      : css`
          background-color: transparent;
          border: 2px solid #ccc;
          &:hover {
            background-color: #333;
            transform: scale(1.05);
          }
        `}
`;

// Oklar
export const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;
