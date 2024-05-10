import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Loader } from "./Loader";
import { Header } from "./Header/Header";
import styled from "styled-components";

const GlobalContainer = styled.div`
  margin-inline: auto;
`;

export const SharedLayout = () => {
  const location = useLocation();
  const visibleHeader =
    location.pathname === '/dashboard' ||
    location.pathname === '/orders' ||
    location.pathname === '/products' ||
    location.pathname === '/customers' ||
    location.pathname === '/suppliers';

  return (
    <GlobalContainer>
      {visibleHeader && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};
