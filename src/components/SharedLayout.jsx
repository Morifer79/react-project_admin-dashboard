import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "./Loader";

const GlobalContainer = styled.div`
  margin-inline: auto;
  inline-size: 375px;
  padding-inline: 20px;

  @media (width > 767px) {
    inline-size: 768px;
    padding-inline: 32px;
  }

  @media (width > 1439px) {
    inline-size: 1440px;
    padding-inline: 40px;
  }
`;

export const SharedLayout = () => {
  return (
    <GlobalContainer>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};
