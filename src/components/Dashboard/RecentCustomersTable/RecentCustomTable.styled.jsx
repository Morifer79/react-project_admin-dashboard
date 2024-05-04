import styled from 'styled-components';
import { theme } from '../../../stylesheet/theme';

export const Wrapper = styled.div`
  margin-block: ${theme.spacing(10)} ${theme.spacing(40)};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(34)};
  @media (width > 1439px) {
    margin-inline-start: ${theme.spacing(40)};
    flex-direction: row;
    gap: ${theme.spacing(10)};
  }
`;

export const Table = styled.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }
  td {
    padding-inline: ${theme.spacing(5)};
    border-block: 1px solid #1d1e2119;
  }
  &.first td {
    vertical-align: middle;
    border-inline: 1px solid #1d1e2119;
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

export const TableBodyThumb = styled.div`
  max-inline-size: 335px;
  max-block-size: 412px;
  overflow: auto;
  @media (width > 767px) {
    max-inline-size: 704px;
    max-block-size: 448px;
  }
`;

export const HeaderTitle = styled.th`
  padding: ${theme.spacing(7)};
  border-radius: ${theme.radii.s} ${theme.radii.s} 0 0;
  background-color: ${theme.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: ${theme.spacing(10)};
  }
`;

export const HeaderSubTitle = styled.td`
  color: #1d1e2166;
  padding: ${theme.spacing(5)} ${theme.spacing(7)};
  @media (width > 767px) {
    padding: ${theme.spacing(10)} ${theme.spacing(14.5)};
  }
`;

export const FirstRow = styled.td`
  padding-inline-start: ${theme.spacing(7)};
  @media (width > 767px) {
    padding-inline-start: ${theme.spacing(10)};
    padding-block: ${theme.spacing(5)};
    display: flex;
    align-items: center;
    gap: ${theme.spacing(4)};
  }
`;

export const SecondCol = styled.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: ${theme.spacing(5)};
  white-space: normal;
`;
