import { COLORS } from 'constants/colors';
import styled from 'styled-components';

export const StPolaroid = styled.div`
  padding: 1rem;
  background-color: ${(props) => (props.$clicked ? COLORS.blue.gulf : 'white')};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.1s ease-in-out;
  border: 5px double skyblue;

  div > img {
    width: 150px;
    height: 220px;
  }

  div > p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    text-align: center;
    font-weight: bold;
    color: ${COLORS.blue.congress};
    background: radial-gradient(
      circle,
      hsla(0, 0%, 100%, 1) 0%,
      hsla(197, 100%, 94%, 1) 100%
    );
  }

  &:nth-child(even) {
    rotate: 2deg;
  }
  &:nth-child(odd) {
    rotate: -1deg;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
