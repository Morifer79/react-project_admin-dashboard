import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
} from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { BtnWrapper, Table, TableThumb } from './OrdersTable.styled';
import { StyledStatus } from '../../StyledStatus/StyledStatus';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../redux/pharmacy/pharmacyOperations';
import { selectOrders } from '../../../redux/pharmacy/pharmacySelectors';
import noImg from '../../../assets/noImg.jpg';

export const OrdersTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);  

  const totalPages = Math.ceil(orders.total / 5);

  const toBack = () => (page === 1 ? undefined : setPage(page - 1));
  const toForward = () => (page === totalPages ? undefined : setPage(page + 1));

  useEffect(() => {
    dispatch(getOrders({ page }));
  }, [dispatch, page]);

  return (
    <>
      <TableThumb>
        <Table>
          <thead>
            <tr>
              <HeaderTitle colSpan="6">All orders</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <HeaderSubTitle>User Info</HeaderSubTitle>
              <HeaderSubTitle>Address</HeaderSubTitle>
              <HeaderSubTitle>Products</HeaderSubTitle>
              <HeaderSubTitle>Price</HeaderSubTitle>
              <HeaderSubTitle>Status</HeaderSubTitle>
              <HeaderSubTitle>Order date</HeaderSubTitle>
            </tr>
            {orders.result?.map(item => (
              <tr key={item._id}>
                <FirstRow>
                  <img src={item.image ? item.image : noImg} alt="user" />
                  <span>{item.name}</span>
                </FirstRow>
                <td>{item.address}</td>
                <td>{item.products}</td>
                <td>{item.price}</td>
                <td>
                  <StyledStatus prop={item.status} $variant={item.status} />
                </td>
                <td>{item.order_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableThumb>
      <BtnWrapper>
        <button
          type="button"
          onClick={toBack}
          disabled={page === 1 ? true : false}
        >
          🔼
        </button>
        <p>
          <span>{page}</span> / {totalPages}
        </p>
        <button
          type="button"
          onClick={toForward}
          disabled={page === totalPages ? true : false}
        >
          🔽
        </button>
      </BtnWrapper>
    </>
  );
};
