import styled from 'styled-components';
import { COLORS } from 'constants/colors';

export const AddLetter = styled.section`
  padding: 0 3rem 3rem;

  form {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    padding: 1rem;

    & > div {
      display: flex;
      align-items: center;
      img {
        margin-right: 6px;
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        border-radius: 50%;
      }
      span {
        font-weight: bold;
      }
    }
    input {
      padding: 0.2rem 0;
      font-size: 1rem;
      line-height: 2rem;
      text-decoration: underline;
    }
    textarea {
      padding: 1rem;
      border: 1px dashed #000;
      resize: none;
      margin-bottom: 5px;
      border-radius: 5px;
    }
    button {
      padding: 0.4rem 0;
      background-color: ${COLORS.blue.sea};
      font-weight: bold;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
