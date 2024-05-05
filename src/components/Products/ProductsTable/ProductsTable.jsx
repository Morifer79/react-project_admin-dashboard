import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
} from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { Table, TableThumb } from '../../Orders/OrdersTable/OrdersTable.styled';
import sprite from '../../../assets/sprite.svg';
import noImg from '../../../assets/noImg.png';
import data from './products.json';
import { BtnChange, BtnWrapper } from './ProductsTable.styled';
import { PopUp } from '../../PopUp/PopUp';
import { EditData } from '../../PopUp/EditData/EditData';
import { useState } from 'react';

export const ProductsTable = () => {
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
      <Table>
        <thead>
          <tr>
            <HeaderTitle colSpan="6">All products</HeaderTitle>
          </tr>
        </thead>
        <tbody>
          <TableThumb>
            <tr>
              <HeaderSubTitle>Product Info</HeaderSubTitle>
              <HeaderSubTitle>Category</HeaderSubTitle>
              <HeaderSubTitle>Stock</HeaderSubTitle>
              <HeaderSubTitle>Suppliers</HeaderSubTitle>
              <HeaderSubTitle>Price</HeaderSubTitle>
              <HeaderSubTitle>Actions</HeaderSubTitle>
            </tr>
            {data.map(item => (
              <tr key={item.id}>
                <FirstRow>
                  <img src={item.photo ? item.photo : noImg} alt="user" />
                  <span>{item.name}</span>
                </FirstRow>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>{item.suppliers}</td>
                <td>{item.price}</td>
                <td>
                  <BtnWrapper>
                    <BtnChange onClick={openModal}>
                      <svg>
                        <use href={`${sprite}#icon-edit`} />
                      </svg>
                    </BtnChange>
                    <BtnChange>
                      <svg>
                        <use href={`${sprite}#icon-trash`} />
                      </svg>
                    </BtnChange>
                  </BtnWrapper>
                </td>
              </tr>
            ))}
          </TableThumb>
        </tbody>
      </Table>
      <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
        <EditData onRequestClose={closeModal} />
      </PopUp>
    </>
  );
};
