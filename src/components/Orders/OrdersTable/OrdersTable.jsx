import { FirstRow, HeaderSubTitle, HeaderTitle } from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { Table, TableThumb } from './OrdersTable.styled';
import noImg from '../../../assets/noImg.png'
import data from './orders.json';
import { StyledStatus } from '../../StyledStatus/StyledStatus';

export const OrdersTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderTitle colSpan="6">Recent Customers</HeaderTitle>
        </tr>
      </thead>
      <tbody>
        <TableThumb>
          <tr>
            <HeaderSubTitle>User Info</HeaderSubTitle>
            <HeaderSubTitle>Address</HeaderSubTitle>
            <HeaderSubTitle>Products</HeaderSubTitle>
            <HeaderSubTitle>Price</HeaderSubTitle>
            <HeaderSubTitle>Status</HeaderSubTitle>
            <HeaderSubTitle>Order date</HeaderSubTitle>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <FirstRow>
                <img src={item.photo ? item.photo : noImg} alt="user" />
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
        </TableThumb>
      </tbody>
    </Table>
  );
};
