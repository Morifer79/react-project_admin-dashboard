import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { Amount, CardList, FlexBox, Title } from './DashboardList.styled';
import { selectDashboard } from '../../../redux/pharmacy/pharmacySelectors';
import { getDashboard } from '../../../redux/pharmacy/pharmacyOperations';
import { useEffect } from 'react';

export const DashboardList = () => {
  const dispatch = useDispatch();

  const { productsCount, suppliersCount, customersCount } =
    useSelector(selectDashboard);

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  return (
    <CardList>
      <li>
        <FlexBox>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Title>All products</Title>
        </FlexBox>
        <Amount>{productsCount}</Amount>
      </li>
      <li>
        <FlexBox>
          <svg>
            <use href={`${sprite}#icon-db`} />
          </svg>
          <Title>All suppliers</Title>
        </FlexBox>
        <Amount>{suppliersCount}</Amount>
      </li>
      <li>
        <FlexBox>
          <svg>
            <use href={`${sprite}#icon-users`} />
          </svg>
          <Title>All Customers </Title>
        </FlexBox>
        <Amount>{customersCount}</Amount>
      </li>
    </CardList>
  );
};
