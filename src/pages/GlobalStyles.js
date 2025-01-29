import styled, { createGlobalStyle } from "styled-components";

// Global stil ayarları
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #1a202c; /* Genel arka plan rengi */
    color: #ffffff; /* Varsayılan metin rengi */
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

// Sayfa genel yapısı
export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding-top: 80px; /* Navbar için boşluk */
`;

// Başlık ve içerik kaplayıcı
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Genel başlık stili
export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #d12727; /* Kırmızı ton */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Alt başlık stili
export const Subtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #e53e3e; /* Kırmızı */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Kart bileşeni
export const Card = styled.div`
  background: #2d3748; /* Gri ton */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Kart başlık stili
export const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: #63b3ed; /* Mavi */
  margin-bottom: 10px;
`;

// Genel metin stili
export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #a0aec0; /* Açık gri */
  margin-bottom: 10px;

  strong {
    color: #63b3ed; /* Mavi */
  }
`;

// Görüntü konteyneri
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
`;

// Görseller için stil
export const Image = styled.img`
  max-width: 150px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

// Videolar için stil
export const Video = styled.video`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
`;

// Buton stili
export const Button = styled.a`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #6366f1;
  border-radius: 5px;
  text-align: center;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: #4338ca;
    transform: scale(1.05);
  }
`;

// Liste stili
export const List = styled.ul`
  padding: 0;
  list-style: none;

  li {
    background: #4a5568;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: background 0.3s;

    &:hover {
      background: #2d3748;
    }

    strong {
      color: #d12727; /* Kırmızı */
    }
  }
`;
