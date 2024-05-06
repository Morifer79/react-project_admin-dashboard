import { FirstRow, HeaderSubTitle, HeaderTitle } from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { Table, TableThumb } from '../../Orders/OrdersTable/OrdersTable.styled';
import noImg from '../../../assets/noImg.png';
import customers from './customers.json';

export const CustomersTable = () => {
  return (
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
          {customers.map((item, index) => (
            <tr key={index}>
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
  );
};
