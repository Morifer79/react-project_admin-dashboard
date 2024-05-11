import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
} from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { BtnWrapper, Table, TableThumb } from '../../Orders/OrdersTable/OrdersTable.styled';
import { getCustomers } from '../../../redux/pharmacy/pharmacyOperations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCustomers } from '../../../redux/pharmacy/pharmacySelectors';
import noImg from '../../../assets/noImg.jpg';

export const CustomersTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomers);

  const totalPages = Math.ceil(customers.total / 5);

  const toBack = () => (page === 1 ? undefined : setPage(page - 1));
  const toForward = () => (page === totalPages ? undefined : setPage(page + 1));

  useEffect(() => {
    dispatch(getCustomers({page}));
  }, [dispatch, page]);

  return (
    <>
      <TableThumb>
        <Table>
          <thead>
            <tr>
              <HeaderTitle colSpan="6">Customers Data</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <HeaderSubTitle>User Info</HeaderSubTitle>
              <HeaderSubTitle>Email</HeaderSubTitle>
              <HeaderSubTitle>Address</HeaderSubTitle>
              <HeaderSubTitle>Phone</HeaderSubTitle>
              <HeaderSubTitle>Register date</HeaderSubTitle>
            </tr>
            {customers.result?.map(item => (
              <tr key={item._id}>
                <FirstRow>
                  <img src={item.image ? item.image : noImg} alt="user" />
                  <span>{item.name}</span>
                </FirstRow>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{item.register_date}</td>
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
