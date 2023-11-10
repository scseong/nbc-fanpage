import styled from 'styled-components';
import bg from 'assets/bg2.jpg';

export const StBanner = styled.section`
  padding: 0 3rem 2rem;

  /* TODO: Image resize */
  div {
    margin: 0 auto;
    width: 90vw;
    height: 70vh;
    border: 6px double #fff;
    background: no-repeat url(${bg});
    background-size: cover;
  }
`;
