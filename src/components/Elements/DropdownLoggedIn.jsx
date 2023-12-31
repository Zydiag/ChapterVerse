import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../hooks';
import { getUser, logout } from '../../services';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const DropdownLoggedIn = ({ setDropDown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { clearCart } = useCart();

  const handleLogout = useCallback(() => {
    logout();
    clearCart();
    setDropDown(false);
    navigate('/');
  }, [clearCart, navigate, setDropDown]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        // data.email ? setUser(data) : handleLogout();
        setUser(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: 'tween', duration: 0.1 }}
      id="dropdownAvatar"
      className="select-none	absolute top-14 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600  backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropDown(false)}
            to="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropDown(false)}
            to="/dashboard"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          // onClick={()=>setDropDown(false)}
          onClick={handleLogout}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </motion.div>
  );
};
