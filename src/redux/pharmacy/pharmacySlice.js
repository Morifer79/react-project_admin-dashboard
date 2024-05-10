import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

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
      .addCase(getDashboard.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dashboard = payload;
      })

      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orders = payload;
      })

      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })

      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products.total = state.products.total + 1;
        state.products.result = [...state.products.result, payload];
      })

      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.products.result.findIndex(
          item => item._id === payload._id
        );
        if (index !== -1) {
          state.products.result[index] = payload;
        }
      })

      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = state.products.result.filter(item => item.id !== payload);
      })

      .addCase(getSuppliers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.suppliers = payload;
        // state.products = [...state.products, payload];
      })

      .addCase(addSupplier.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.suppliers.result = [...state.suppliers, payload];
      })

      .addCase(updateSupplier.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.suppliers.result.findIndex(
          person => person._id === payload._id
        );
        if (index !== -1) {
          state.suppliers.result[index] = payload;
        }
      })

      .addCase(getCustomers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.customers = payload;
      })

      .addMatcher(
        isAnyOf(
          getDashboard.pending,
          getOrders.pending,
          getProducts.pending,
          addProduct.pending,
          updateProduct.pending,
          deleteProduct.pending,
          getSuppliers.pending,
          addSupplier.pending,
          updateSupplier.pending,
          getCustomers.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          getDashboard.rejected,
          getOrders.rejected,
          getProducts.rejected,
          addProduct.rejected,
          updateProduct.rejected,
          deleteProduct.rejected,
          getSuppliers.rejected,
          addSupplier.rejected,
          updateSupplier.rejected,
          getCustomers.rejected
        ),
        rejected
      );
  },
});

export const pharmacyReducer = pharmacySlice.reducer;