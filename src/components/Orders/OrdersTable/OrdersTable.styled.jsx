import styled from 'styled-components';
import { theme } from '../../../stylesheet/theme';

export const Table = styled.table`
  max-inline-size: 335px;
  overflow: hidden;
  margin-block: ${theme.spacing(10)} ${theme.spacing(70)};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;

  @media (width > 767px) {
    margin-block-end: ${theme.spacing(143)};
    font-size: 16px;
    line-height: 1.125;
  }
  @media (width > 1439px) {
    margin-inline-start: ${theme.spacing(40)};
  }
  td {
    vertical-align: middle;
    padding-inline: ${theme.spacing(5)};
    border: 1px solid #1d1e2119;
  }
  tbody {
    background-color: ${theme.colors.light};
  }

  img {
    inline-size: 24px;
    block-size: 24px;
    border-radius: ${theme.radii.xl};
    @media (width > 767px) {
      inline-size: 36px;
      block-size: 36px;
    }
  }
`;

export const TableThumb = styled.div`
  max-inline-size: 335px;
  max-block-size: 412px;
  overflow: auto;
  @media (width > 767px) {
    max-inline-size: 704px;
    max-block-size: 500px;
  }
  @media (width > 1439px) {
    max-inline-size: 100%;
  }
`;