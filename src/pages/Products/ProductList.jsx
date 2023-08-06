import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFilter, useTitle } from '../../hooks';

import { ProductCard } from '../../components';
import { FilterBar } from './components/FilterBar';

import { AnimatePresence, motion } from 'framer-motion';
import { getList } from '../../services';

export const ProductList = () => {
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get('q');

  const [show, setShow] = useState(false);
  useTitle('Explore eBooks');

  const { productList, initProductList } = useFilter();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getList(searchTerm);
      initProductList(data);
    };
    fetchProducts();
  }, [initProductList, searchTerm]);

  return (
    <motion.main
      // initial={{ x: window.innerWidth, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ type:'linear', delay: 0.2 }}
      exit={{ x: window.innerWidth, transition: { type: 'linear' } }}
      // className="bg-rose-300 origin-bottom"
    >
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({productList && productList.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {productList &&
            productList?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
      <AnimatePresence>
        {show && <FilterBar setShow={setShow} />}
      </AnimatePresence>
    </motion.main>
  );
};
