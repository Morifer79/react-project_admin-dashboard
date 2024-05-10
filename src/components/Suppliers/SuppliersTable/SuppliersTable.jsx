import {
  FirstRow,
  HeaderSubTitle,
  HeaderTitle,
} from '../../Dashboard/RecentCustomersTable/RecentCustomTable.styled';
import {
  BtnWrapper,
  Table,
  TableThumb,
} from '../../Orders/OrdersTable/OrdersTable.styled';
import { PopUp } from '../../PopUp/PopUp';
import { EditSuppliers } from '../../PopUp/EditSuppliers/EditSuppliers';
import { useEffect, useState } from 'react';
import { StyledStatus } from '../../StyledStatus/StyledStatus';
import { BtnOvalChange } from './SuppliersTable.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectSuppliers } from '../../../redux/pharmacy/pharmacySelectors';
import { getSuppliers } from '../../../redux/pharmacy/pharmacyOperations';
import { Popover } from 'antd';
import sprite from '../../../assets/sprite.svg';

export const SuppliersTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const suppliers = useSelector(selectSuppliers);

  const totalPages = Math.ceil(suppliers.total / 5);

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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    dispatch(getSuppliers({ page }));
  }, [dispatch, page]);

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
            {suppliers.result?.map(item => (
              <>
                <tr key={item._id}>
                  <FirstRow>
                    <span>{item.name}</span>
                  </FirstRow>
                  <td>{item.address}</td>
                  <td>{item.suppliers}</td>
                  <td>{item.date}</td>
                  <td>{item.amount}</td>
                  <td>
                    <StyledStatus
                      prop={capitalizeFirstLetter(item.status)}
                      $variant={capitalizeFirstLetter(item.status)}
                    />
                  </td>
                  <td>
                    <Popover content="Click to edit" trigger="hover">
                      <BtnOvalChange onClick={openModal}>
                        <svg>
                          <use href={`${sprite}#icon-edit`} />
                        </svg>
                        <span>Edit</span>
                      </BtnOvalChange>
                    </Popover>
                  </td>
                </tr>
                <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
                  <EditSuppliers onRequestClose={closeModal} item={item} />
                </PopUp>
              </>
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
