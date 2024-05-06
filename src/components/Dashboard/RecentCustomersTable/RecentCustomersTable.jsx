import { StyledLabel } from '../../StyledLabel/StyledLabel';
import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
  SecondCol,
  Table,
  TableBodyThumb,
  Wrapper,
} from './RecentCustomTable.styled';
import noImg from '../../../assets/noImg.png';
import customers from './customers.json';
import income from './income_expenses.json';

export const RecentCustomersTable = () => {
  return (
    <Wrapper>
      <TableBodyThumb>
        <Table className="first">
          <thead>
            <tr>
              <HeaderTitle colSpan="6">Recent Customers</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <HeaderSubTitle>Name</HeaderSubTitle>
              <HeaderSubTitle>Email</HeaderSubTitle>
              <HeaderSubTitle>Spent</HeaderSubTitle>
              <HeaderSubTitle>Phone</HeaderSubTitle>
              <HeaderSubTitle>Address</HeaderSubTitle>
              <HeaderSubTitle>Register Date</HeaderSubTitle>
            </tr>
            {customers.map((item, index) => (
              <tr key={index}>
                <FirstRow>
                  <img src={item.photo ? item.photo : noImg} alt="user" />
                  <span>{item.name}</span>
                </FirstRow>
                <td>{item.email}</td>
                <td>{item.spent}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.register_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableBodyThumb>

      <TableBodyThumb>
        <Table>
          <thead>
            <tr>
              <HeaderTitle colSpan="3">Income/Expenses</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <HeaderSubTitle colSpan="3">Today</HeaderSubTitle>
            </tr>
            {income.map((item, index) => (
              <tr key={index}>
                <FirstRow>
                  <StyledLabel prop={item.type} $variant={item.type} />
                </FirstRow>
                <SecondCol>{item.name}</SecondCol>
                <td
                  style={{
                    color:
                      `${item.type}` === 'Expense'
                        ? '#E85050'
                        : `${item.type}` === 'Income'
                        ? '#59B17A'
                        : '#1D1E21',
                    textDecoration:
                      `${item.type}` === 'Error' && 'line-through',
                  }}
                >
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableBodyThumb>
    </Wrapper>
  );
};
