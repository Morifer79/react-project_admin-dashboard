import styled from 'styled-components';
import notFound from '../assets/not-found.png';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  block-size: 100vh;
  background: center center / contain no-repeat url(${notFound});
  button {
    margin-block-start: 20px;
    margin-inline-start: 20px;
    @keyframes pulse {
      0% {
        box-shadow: rgba(55, 141, 250, 0.8) 0px 0px 0px 0px;
      }
      100% {
        box-shadow: rgba(55, 141, 250, 0) 0px 0px 0px 12px;
      }
    }
    animation: pulse 1s ease infinite;
  }
`;

export default function NotFoundPage() {
  return (
    <Wrapper>
      <button>
        <NavLink to="/">&#9668;&#9668;&#9668;HOME&#9668;&#9668;&#9668;</NavLink>
      </button>
    </Wrapper>
  );
}
