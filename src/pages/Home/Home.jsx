// import { FeaturedProducts } from './components/FeaturedProducts'
import { useTitle } from '../../hooks/useTitle';
import { Faq } from './components/Faq';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { motion } from 'framer-motion';
export const Home = () => {
  useTitle('Access Latest Ebooks')
  return (
    <motion.main
      initial={{ x: window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ transition: 'linear',delay:0.2}}
      exit={{ x: window.innerWidth, transition:{type:"linear", delay: 0}}}
      className="origin-top"
    >
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </motion.main>
  );
};
