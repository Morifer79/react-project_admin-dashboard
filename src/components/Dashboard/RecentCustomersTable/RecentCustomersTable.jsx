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
import data from './customers.json';
import data2 from './income_expenses.json';

export const RecentCustomersTable = () => {
  return (
    <Wrapper>
      <Table className="first">
        <thead>
          <tr>
            <HeaderTitle colSpan="6">Recent Customers</HeaderTitle>
          </tr>
        </thead>
        <tbody>
          <TableBodyThumb>
            <tr>
              <HeaderSubTitle>Name</HeaderSubTitle>
              <HeaderSubTitle>Email</HeaderSubTitle>
              <HeaderSubTitle>Spent</HeaderSubTitle>
              <HeaderSubTitle>Phone</HeaderSubTitle>
              <HeaderSubTitle>Address</HeaderSubTitle>
              <HeaderSubTitle>Register Date</HeaderSubTitle>
            </tr>
            {data.map((item, index) => (
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
          </TableBodyThumb>
        </tbody>
      </Table>

      <Table>
        <thead>
          <tr>
            <HeaderTitle colSpan="3">Income/Expenses</HeaderTitle>
          </tr>
        </thead>
        <tbody>
          <TableBodyThumb>
            <tr>
              <HeaderSubTitle colSpan="3">Today</HeaderSubTitle>
            </tr>
            {data2.map((item, index) => (
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
          </TableBodyThumb>
        </tbody>
      </Table>
    </Wrapper>
  );
};
