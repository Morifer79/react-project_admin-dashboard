import { Container } from "../Constructor/Container/Container";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { Wrapper } from "./Welcome.styled";

export const Welcome = () => {
  const screenWidth = window.innerWidth;
  return (
    <>
      
      <Container>
        {screenWidth > 1439 && <SidebarMenu />}
        <Wrapper>
          <h1>
            Welcome to the Medicine Store home page. To continue, select the
            section of interest...
          </h1>
        </Wrapper>
      </Container>
    </>
  );
}
