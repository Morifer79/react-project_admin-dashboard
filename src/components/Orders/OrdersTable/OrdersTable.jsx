import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
} from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { Table, TableThumb } from './OrdersTable.styled';
import noImg from '../../../assets/noImg.png';
import orders from './orders.json';
import { StyledStatus } from '../../StyledStatus/StyledStatus';

export const OrdersTable = () => {
  return (
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
          {orders.map((item, index) => (
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
        </tbody>
      </Table>
    </TableThumb>
  );
};
