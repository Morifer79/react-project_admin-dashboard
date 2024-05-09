import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout';
import { lazy, useEffect } from 'react';
import { Loader } from './components/Loader';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './components/Route/RestrictedRoute';
import { PrivateRoute } from './components/Route/PrivateRoute';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from './redux/auth/authOperations';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const CustomersPage = lazy(() => import('./pages/CustomersPage'));
const SuppliersPage = lazy(() => import('./pages/SuppliersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/dashboard"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/dashboard"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              redirectTo="/dashboard"
              component={<DashboardPage />}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute redirectTo="/orders" component={<OrderPage />} />
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute redirectTo="/products" component={<ProductsPage />} />
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute
              redirectTo="/customers"
              component={<CustomersPage />}
            />
          }
        />
        <Route
          path="/suppliers"
          element={
            <PrivateRoute
              redirectTo="/suppliers"
              component={<SuppliersPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
