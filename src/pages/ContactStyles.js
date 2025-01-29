import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 100%;
  min-width: 400px;
  text-align: center;
  color: #ffffff;
`;

// Liste
export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
`;

// Link
export const StyledAnchor = styled.a`
  color: #63b3ed; /* Mavi */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// Strong
export const StyledStrong = styled.strong`
  color: #ff6f61; /* Kırmızı */
  font-weight: bold;
`;


export const ContactText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #cbd5e0;
  margin-top: 80px;
`;



// Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #4a5568;
    border-radius: 5px;
    background: #2d3748;
    color: #ffffff;
    font-size: 1rem;

    &:focus {
      border-color: #63b3ed;
      outline: none;
    }
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #d12727;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #e53e3e;
    }
  }
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1rem;
  color: #ffffff;

  span {
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #4a5568; /* Gri çerçeve */
    border-radius: 5px;
    background: #2d3748; /* Koyu gri */
    color: #ffffff; /* Beyaz metin */
    font-size: 1rem;

    &:focus {
      border-color: #63b3ed; /* Mavi çerçeve */
      outline: none;
    }
  }
`;

