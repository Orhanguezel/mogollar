import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Resimlerin çevresi için stil
export const AnimatedImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex: 1 1 calc(33.33% - 20px); /* Flex genişliği: 3 sütun düzeni */
  max-width: calc(33.33% - 20px); /* Maksimum genişlik */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Hover efekti */
  }
`;

// Resimler için stil
export const AnimatedGalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;
