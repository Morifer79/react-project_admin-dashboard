import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Loader } from "./Loader";
import { Header } from "./Header/Header";
import Confetti from 'react-confetti';
import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-inline: auto;
`;

export const SharedLayout = () => {
  const location = useLocation();
  const userLocation =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/*';

  return (
    <GlobalContainer>
      {location.pathname === '/' && <Confetti width={window.innerWidth} />}
      {!userLocation && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};
