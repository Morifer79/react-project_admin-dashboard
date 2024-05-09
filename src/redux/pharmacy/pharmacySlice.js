import { createSlice } from '@reduxjs/toolkit';
import {
  getDashboard,
  getOrders,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getSuppliers,
  addSupplier,
  updateSupplier,
  getCustomers,
} from './pharmacyOperations';

export const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState: {
    dashboard: [],
    orders: [],
    suppliers: [],
    products: [],
    customers: [],
    page: 1,
    limit: 5,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDashboard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboard.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dashboard = payload;
      })
      .addCase(getDashboard.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(getOrders.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orders = payload;
      })
      .addCase(getOrders.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(getProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(addProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = [...state.products, payload];
      })
      .addCase(addProduct.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(updateProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.products.findIndex(
          item => item._id === payload._id
        );
        if (index !== -1) {
          state.products[index] = payload;
        }
      })
      .addCase(updateProduct.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(deleteProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = state.products.filter(
          item => item.id !== payload
        );
      })
      .addCase(deleteProduct.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(getSuppliers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSuppliers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.suppliers = payload;
        state.products = [...state.products, payload];
      })
      .addCase(getSuppliers.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(addSupplier.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSupplier.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.suppliers = [...state.suppliers, payload];
      })
      .addCase(addSupplier.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(updateSupplier.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSupplier.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.suppliers.findIndex(
          person => person._id === payload._id
        );
        if (index !== -1) {
          state.suppliers[index] = payload;
        }
      })
      .addCase(updateSupplier.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addCase(getCustomers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.customers = payload;
      })
      .addCase(getCustomers.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const pharmacyReducer = pharmacySlice.reducer;