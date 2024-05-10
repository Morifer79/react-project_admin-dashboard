import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
} from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import { BtnWrapper, Table, TableThumb } from '../../Orders/OrdersTable/OrdersTable.styled';
import { BtnChange, BtnChangeWrapper } from './ProductsTable.styled';
import { PopUp } from '../../PopUp/PopUp';
import { EditData } from '../../PopUp/EditData/EditData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/pharmacy/pharmacyOperations';
import { selectProducts } from '../../../redux/pharmacy/pharmacySelectors';
import { Popover } from 'antd';
import sprite from '../../../assets/sprite.svg';
import noImg from '../../../assets/noImg.png';

export const ProductsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const totalPages = Math.ceil(products.total / 5);

  const toBack = () => (page === 1 ? undefined : setPage(page - 1));
  const toForward = () => (page === totalPages ? undefined : setPage(page + 1));

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    dispatch(getProducts({page}));
  }, [dispatch, page]);

  return (
    <>
      <TableThumb>
        <Table>
          <thead>
            <tr>
              <HeaderTitle colSpan="6">All products</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <HeaderSubTitle>Product Info</HeaderSubTitle>
              <HeaderSubTitle>Category</HeaderSubTitle>
              <HeaderSubTitle>Stock</HeaderSubTitle>
              <HeaderSubTitle>Suppliers</HeaderSubTitle>
              <HeaderSubTitle>Price</HeaderSubTitle>
              <HeaderSubTitle>Actions</HeaderSubTitle>
            </tr>
            {products.result?.map(item => (
              <tr key={item._id}>
                <FirstRow>
                  <img src={item.image ? item.image : noImg} alt="user" />
                  <span>{item.name}</span>
                </FirstRow>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>{item.suppliers}</td>
                <td>{item.price}</td>
                <td>
                  <BtnChangeWrapper>
                    <Popover content="Click to edit" trigger="hover">
                      <BtnChange onClick={openModal}>
                        <svg>
                          <use href={`${sprite}#icon-edit`} />
                        </svg>
                      </BtnChange>
                    </Popover>
                    <Popover
                      content="You`re about to delete an item!"
                      title="Caution!"
                      trigger="hover"
                    >
                      <BtnChange>
                        <svg>
                          <use href={`${sprite}#icon-trash`} />
                        </svg>
                      </BtnChange>
                    </Popover>
                  </BtnChangeWrapper>
                </td>
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
      <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
        <EditData onRequestClose={closeModal} />
      </PopUp>
    </>
  );
};
