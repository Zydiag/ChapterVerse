import { Link } from 'react-router-dom';
import { Search } from '../Sections/Search';
import logo from '../../assets/logo2.png';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DropdownLoggedOut, DropdownLoggedIn } from '../../components';
import { useCart } from '../../hooks';

export const Header = () => {
  const { cartList } = useCart();

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );
  const [showSearch, setShowSearch] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem('token'));

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <header>
      <motion.nav
        animate={{ height: '100%' }}
        transition={{ duration: 0.5 }}
        className="relative bg-white border-gray-200 border-b-2 dark:bg-gray-900 "
      >
        <div className="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span>
                <img src={logo} className="h-8 mr-3" alt="CodePedia Logo" />
              </span>
              <span className=" tracking-tight self-center text-2xl font-semibold whitespace-nowrap dark:text-white transition-all ">
                Chapter
              </span>
              <span className=" tracking-tight self-center text-2xl font-semibold whitespace-nowrap dark:text-white transition-all ">
                Verse
              </span>
            </div>
          </Link>

          <div className="flex items-center relative">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropDown(!dropDown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            <AnimatePresence>
              {dropDown &&
                (token ? (
                  <DropdownLoggedIn setDropDown={setDropDown} />
                ) : (
                  <DropdownLoggedOut setDropDown={setDropDown} />
                ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {showSearch && <Search setShowSearch={setShowSearch} />}
      </AnimatePresence>
    </header>
  );
};
