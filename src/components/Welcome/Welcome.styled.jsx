import styled from "styled-components";

export const Wrapper = styled.div`
  max-inline-size: 200px;
  margin: 20vh auto;
  text-align: center;
  font-size: 12px;

  @media (width > 767px) {
    max-inline-size: 500px;
  }

  @media (width > 1439px) {
    max-inline-size: 700px;
    font-size: 20px;
  }
`;