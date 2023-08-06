import { AnimatePresence } from 'framer-motion';
import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';

export const App = () => {
  return (
    <div className="dark:bg-gray-900 overflow-x-hidden">
      <Header />
      <AnimatePresence>
        <AllRoutes />
      </AnimatePresence>
      <Footer />
    </div>
  );
};
