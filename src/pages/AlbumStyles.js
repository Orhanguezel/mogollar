import styled from "styled-components";

// Albüm detaylarına özel bir başlık stili
export const AlbumSectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #63b3ed; /* Mavi */
  margin-top: 20px;
  text-align: center;
`;

// Albüm video bağlantıları için özel stil
export const VideoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: #63b3ed; /* Mavi */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Albüm içindeki parçaların listesi için özel stil
export const TrackItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background: #4a5568; /* Koyu gri */
  border-radius: 8px;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.02);
    background-color: #2d3748; /* Daha koyu gri */
  }

  span {
    display: block;
    font-size: 1rem;
    color: #a0aec0; /* Açık gri */
  }

  strong {
    color: #d12727; /* Kırmızı */
  }

  a {
    color: #63b3ed; /* Mavi */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Albüm yükleniyor mesajına özel stil
export const LoadingMessage = styled.p`
  font-size: 1.5rem;
  color: #e53e3e; /* Kırmızı */
  text-align: center;
  margin-top: 50px;
`;
