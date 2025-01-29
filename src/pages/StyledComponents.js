import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px; 
  margin: 0 auto;
`;

export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #64025E, #000, #64025E);
  z-index: -1;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #d12727; /* Kırmızı */
  margin-bottom: 20px;
`;

export const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  justify-content: space-between;
`;

export const AlbumCard = styled.div`
  padding: 20px;
  margin: 20px 0;
  transition: transform 0.3s, box-shadow 0.3s;
`;

export const Info = styled.p`
  font-size: 1rem;
  color: #cbd5e0; /* Açık gri */
  margin-bottom: 10px;

  strong {
    color: #63b3ed; /* Vurgulu mavi */
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 150px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const VideoLink = styled.a`
  display: inline-block;
  color: #63b3ed; /* Mavi */
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const MembersTitle = styled.h2`
  font-size: 2rem;
  color: #e53e3e; /* red-500 */
  margin-bottom: 20px;
  text-align: center;
`;

export const MembersList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

export const MemberCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px 0;
  transition: transform 0.3s, box-shadow 0.3s;
`;

export const MemberName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #63b3ed; /* blue-400 */
  margin-bottom: 10px;
`;

export const MemberRole = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: #e53e3e; /* red-500 */
`;

export const MemberDescription = styled.p`
  font-size: 1rem;
  text-align: space-between;
  color: #a0aec0; /* gray-400 */
  margin: 10px 0;
`;

export const MemberImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MemberVideo = styled.video`
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const InfoContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #e53e3e;
  margin-bottom: 10px;
  text-align: left;
`;


export const Button = styled.button`
  padding: 10px;
  background-color: #d12727; /* Kırmızı */
  color: #ffffff; /* Beyaz */
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e53e3e; /* Daha parlak kırmızı */
  }
`;

export const HistoryTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #d12727; /* Kırmızı */
  margin-bottom: 20px;
`;

export const HistoryParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #a0aec0; /* Açık gri */
  max-width: 800px;
  margin-bottom: 20px;
  text-align: justify;
`;

export const Highlight = styled.span`
  color: #63b3ed; /* Mavi */
  font-weight: bold;
`;

export const GalleryTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #d12727; /* Kırmızı */
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const NoFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #4c1d95, #000, #4c1d95);
  text-align: center;
  color: #fff;
  padding: 20px;
`;

export const NoFoundTitle = styled.h1`
  font-size: 3rem;
  color: #e53e3e; /* Kırmızı */
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const NoFoundMessage = styled.p`
  font-size: 1.5rem;
  color: #a0aec0; /* Gri */
  max-width: 600px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BackButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  background-color: #6366f1; /* Mavi */
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: #4338ca; /* Daha koyu mavi */
    transform: scale(1.05);
  }
`;

// Albüm Başlığı
export const AlbumTitle = styled.h3`
  font-size: 1.8rem;
  color: #63b3ed; /* Mavi */
  margin-bottom: 10px;
`;

// Parça Listesi
export const TrackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

// Parça Öğesi
export const TrackItem = styled.li`
  background: #4a5568;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;

  &:hover {
    background: #2d3748;
  }
`;

// Parça Detayları
export const TrackDetails = styled.div`
  margin-bottom: 10px;

  span {
    font-size: 1rem;
    color: #cbd5e0; /* Açık gri */
  }
`;

// Parça Görselleri Konteyneri
export const TrackImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

// Parça Görseli
export const TrackImage = styled.img`
  max-width: 150px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Parça Bağlantısı
export const TrackLink = styled.a`
  color: #63b3ed;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Mesaj (Hiç Parça Yoksa)
export const NoTracksMessage = styled.p`
  font-size: 1.2rem;
  color: #a0aec0; /* Açık gri */
  text-align: center;
  margin-top: 20px;
`;
// Kart stili
export const HistoryCard = styled.div`
width: 100%;

  padding: 30px;
  margin: 20px auto;

`;

// Sayfa ortasında yer alan GIF
export const CenteredGifContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100; 
  pointer-events: none; 
  
  img {
    object-fit: cover;
  }
`;
// Liste
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 1rem;
    margin-bottom: 10px;

    a {
      color: #63b3ed;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;





