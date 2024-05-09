import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async ({ page = 1, limit = 5 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/orders?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  'pharmacy/allProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/products');
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
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'pharmacy/updateProduct',
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/products/${id}`, { productData });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'pharmacy/removeProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSuppliers = createAsyncThunk(
  'pharmacy/allSuppliers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/suppliers');
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
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSupplier = createAsyncThunk(
  'pharmacy/updateSupplier',
  async ({ id, supplierData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/suppliers/${id}`, { supplierData });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCustomers = createAsyncThunk(
  'pharmacy/allCustomers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/customers');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
