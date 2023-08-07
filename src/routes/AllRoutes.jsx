import { Routes, Route, useLocation } from 'react-router-dom';
import {
  CartPage,
  Home,
  Login,
  OrderPage,
  ProductList,
  Register,
  DashboardPage,
  PageNotFound,
} from '../pages';
import { ProductDetail } from '../pages/ProductDetail';
import { AnimatePresence } from 'framer-motion';

export const AllRoutes = () => {
  const location = useLocation();
  const token = JSON.parse(sessionStorage.getItem('token'));
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={token ? <CartPage /> : <Login />} />
        <Route
          path="order-summary"
          element={token ? <OrderPage /> : <Login />}
        />
        <Route
          path="dashboard"
          element={token ? <DashboardPage /> : <Login />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
