import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
} from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { Table, TableThumb } from '../../Orders/OrdersTable/OrdersTable.styled';
import { PopUp } from '../../PopUp/PopUp';
import { EditSuppliers } from '../../PopUp/EditSuppliers/EditSuppliers';
import { useState } from 'react';
import { StyledStatus } from '../../StyledStatus/StyledStatus';
import { BtnOvalChange } from './SuppliersTable.styled';
import sprite from '../../../assets/sprite.svg';
import suppliers from './suppliers.json';

export const SuppliersTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <TableThumb>
        <Table>
          <thead>
            <tr>
              <HeaderTitle colSpan="7">All suppliers</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <HeaderSubTitle>Suppliers Info</HeaderSubTitle>
              <HeaderSubTitle>Address</HeaderSubTitle>
              <HeaderSubTitle>Company</HeaderSubTitle>
              <HeaderSubTitle>Delivery date</HeaderSubTitle>
              <HeaderSubTitle>Ammount</HeaderSubTitle>
              <HeaderSubTitle>Status</HeaderSubTitle>
              <HeaderSubTitle>Action</HeaderSubTitle>
            </tr>
            {suppliers.map((item, index) => (
              <tr key={index}>
                <FirstRow>
                  <span>{item.name}</span>
                </FirstRow>
                <td>{item.address}</td>
                <td>{item.suppliers}</td>
                <td>{item.date}</td>
                <td>{item.amount.slice(1)}</td>
                <td>
                  <StyledStatus prop={item.status} $variant={item.status} />
                </td>
                <td>
                  <BtnOvalChange onClick={openModal}>
                    <svg>
                      <use href={`${sprite}#icon-edit`} />
                    </svg>
                    <span>Edit</span>
                  </BtnOvalChange>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableThumb>
      <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
        <EditSuppliers onRequestClose={closeModal} />
      </PopUp>
    </>
  );
};