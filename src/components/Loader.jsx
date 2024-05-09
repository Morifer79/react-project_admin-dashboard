// import { PropagateLoader } from 'react-spinners';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoaderBox = styled.div`
  inline-size: 100vw;
  block-size: 100vh;
  position: absolute;
  top: 45%;
  left: 45%;
`;

export const Loader = () => {
  return (
    <LoaderBox>
      <Spin size="large" fullscreen/>
    </LoaderBox>
  );
};

// import { PropagateLoader } from 'react-spinners';
// import styled from 'styled-components';

// const LoaderBox = styled.div`
//   inline-size: 100vw;
//   block-size: 100vh;
//   position: absolute;
//   top: 45%;
//   left: 45%;
// `;

// export const Loader = () => {
//   return (
//     <LoaderBox>
//       <PropagateLoader color="#59B17A" />
//     </LoaderBox>
//   );
// };
