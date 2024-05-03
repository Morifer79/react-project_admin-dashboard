import sprite from '../../../assets/sprite.svg';
import { Amount, CardList, FlexBox, Title } from './DashboardList.styled';

export const DashboardList = () => {
  return (
    <CardList>
      <li>
        <FlexBox>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Title>All products</Title>
        </FlexBox>
        <Amount>8,430</Amount>
      </li>
      <li>
        <FlexBox>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Title>All suppliers</Title>
        </FlexBox>
        <Amount>211</Amount>
      </li>
      <li>
        <FlexBox>
          <svg>
            <use href={`${sprite}#icon-users`} />
          </svg>
          <Title>All Customers </Title>
        </FlexBox>
        <Amount>140</Amount>
      </li>
    </CardList>
  );
};
