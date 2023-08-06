import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PasswordField } from './PasswordField';
import { register } from '../services';

export const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    // toast.success('sahil')
    e.preventDefault();
    const authDetail = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const data = await register(authDetail);
    data.accessToken ? navigate('/products') : toast.error(data);
  };

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Register
        </p>
      </section>
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="capitalize shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Sahil Lakha"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="lowercase shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="shubham@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6 ">
          <PasswordField value={'Your Password'} />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>
    </main>
  );
};
