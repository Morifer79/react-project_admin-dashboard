import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL =
  'https://node-project-admin-dashboard.onrender.com/api';

export const getDashboard = createAsyncThunk(
  'pharmacy/dashboard',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/dashboard');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrders = createAsyncThunk(
  'pharmacy/allOrders',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/orders?page=${page}&limit=${limit}&name=${name}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  'pharmacy/allProducts',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/products?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'pharmacy/newProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/products', productData);
      toast.success('Product successfully added');
      return data;
    } catch (error) {
      toast.error('Product has not been added');
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'pharmacy/updateProduct',
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/products/${id}`, productData);
      toast.success('Product successfully updated');
      return data;
    } catch (error) {
      toast.error('Product has not been updated');
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'pharmacy/removeProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/products/${id}`);
      toast.success('Product successfully removed');
      return data;
    } catch (error) {
      toast.error('Product has not been removed');
      return rejectWithValue(error.message);
    }
  }
);

export const getSuppliers = createAsyncThunk(
  'pharmacy/allSuppliers',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/suppliers?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addSupplier = createAsyncThunk(
  'pharmacy/newSupplier',
  async (supplierData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/suppliers', supplierData);
      toast.success('Supplier successfully added');
      return data;
    } catch (error) {
      toast.error('Supplier has not been added');
      return rejectWithValue(error.message);
    }
  }
);

export const updateSupplier = createAsyncThunk(
  'pharmacy/updateSupplier',
  async ({ id, supplierData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/suppliers/${id}`, supplierData);
      toast.success('Supplier successfully updated');
      return data;
    } catch (error) {
      toast.error('Supplier has not been updated');
      return rejectWithValue(error.message);
    }
  }
);

export const getCustomers = createAsyncThunk(
  'pharmacy/allCustomers',
  async ({ page = 1, limit = 5, name = '' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/customers?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
