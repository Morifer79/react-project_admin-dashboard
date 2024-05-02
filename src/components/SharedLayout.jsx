import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "./Loader";
import { Header } from "./Header/Header";

const GlobalContainer = styled.div`
  margin-inline: auto;
`;

export const SharedLayout = () => {
  const location = useLocation();
  const userLocation =
    location.pathname === '/login' ||
    location.pathname === '/*';

  return (
    <GlobalContainer>
      {!userLocation && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};
