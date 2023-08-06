import { Routes, Route, useLocation } from 'react-router-dom';
import { CartPage, Home, Login, OrderPage, ProductList, Register, DashboardPage } from '../pages';
import { ProductDetail } from '../pages/ProductDetail';
import { AnimatePresence } from 'framer-motion';
// import { ProtectedRoute } from './ProtectedRoute';

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
        <Route path="order-summary" element={token ? <OrderPage /> : <Login />} />
        <Route path="dashboard" element={token ? <DashboardPage /> : <Login />} />

        {/* <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </AnimatePresence>
  );
};
