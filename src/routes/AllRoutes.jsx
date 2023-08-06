import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { CartPage, Home, Login, ProductList, Register } from '../pages';
import { ProductDetail } from '../pages/ProductDetail';
import { AnimatePresence } from 'framer-motion';
import { ProtectedRoute } from './ProtectedRoute';

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

        <Route path="cart" element={token ? <CartPage />: <Navigate to="/login" />} />

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
