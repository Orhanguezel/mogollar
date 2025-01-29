import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;

  img {
    max-width: 200px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const GifWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;

  img {
    max-width: 50px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  video {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  margin-top: 20px;
`;
