import styled, { keyframes } from "styled-components";

// Noktasal animasyon
const dottedBorderAnimation = keyframes`
  0% {
    border-image-source: linear-gradient(0deg, #bb0da9, transparent);
  }
  25% {
    border-image-source: linear-gradient(90deg, #bb0da9, transparent);
  }
  50% {
    border-image-source: linear-gradient(180deg, #bb0da9, transparent);
  }
  75% {
    border-image-source: linear-gradient(270deg, #bb0da9, transparent);
  }
  100% {
    border-image-source: linear-gradient(360deg, #bb0da9, transparent);
  }
`;


// Logo için animasyon
const logoAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 50px 40px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export const NavbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    position: fixed;
    top: 10px;
    height: 150px;
    animation: ${logoAnimation} 3s infinite;
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 980px) {
    display: none;
  }
`;
export const NavigationLink = styled.div`
  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 15px;
    border-radius: 5px;
    border: 3px solid transparent;
    transition: all 0.3s ease;

    &.active-link {
      color: #bb0da9;
      border-image-source: linear-gradient(0deg, #bb0da9, transparent);
      border-image-slice: 1;
      animation: ${dottedBorderAnimation} 3s infinite linear;
    }

    &.inactive-link {
      color: #646cff;
    }

    &:hover {
      color: #fff;
      background-color: #bb0da9;
    }

    @media (max-width: 980px) {
      width: 250px; 
      text-align: center; 
      margin: 15px auto; 
    }
  }
`;


export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 980px) {
    display: block;
  }

  svg {
    height: 30px;
    width: 30px;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 160px;
  right: 20px;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px; 

  @media (min-width: 980px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: #ccc;
    font-size: 16px;
    font-weight: 500;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      background-color: #bb0da9;
    }
  }
`;
