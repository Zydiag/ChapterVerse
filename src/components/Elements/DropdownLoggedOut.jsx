import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const DropdownLoggedOut = ({setDropDown}) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      exit={{ y: -10, opacity: 0}}
      transition={{type: 'tween', duration: 0.1}}
      className="select-none	absolute top-14 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600  backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50"
      id="dropdownAvatar"
    >
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
            to="/login"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
          onClick={() => setDropDown(false)}
            to="/register"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Register
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};
