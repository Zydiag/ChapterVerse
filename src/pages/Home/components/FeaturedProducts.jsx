import { useEffect, useState } from 'react';
import { ProductCard } from '../../../components';
import { getFeaturedList } from '../../../services';
import { toast } from 'react-toastify';

export const FeaturedProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeaturedList();
        setProduct(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {product &&
          product?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </div>
    </section>
  );
};
