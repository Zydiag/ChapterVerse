import { useNavigate } from 'react-router-dom';
import { PasswordField } from './PasswordField';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { login } from '../services';
import { useTitle } from '../hooks';

export const Login = () => {
  const navigate = useNavigate();
  useTitle('Login');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authDetail = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const data = await login(authDetail);
      data.accessToken ? navigate('/products') : toast.error(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.main
      // initial={{ x: window.innerWidth, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ type: 'linear', delay: 0.2 }}
      exit={{ x: window.innerWidth, transition: { type: 'linear' } }}
    >
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Login
        </p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="someone@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <PasswordField value={'Password'} />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
      </form>
      {/* <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button> */}
    </motion.main>
  );
};
