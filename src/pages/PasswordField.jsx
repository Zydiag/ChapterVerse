import { useEffect, useState } from 'react';

export const PasswordField = ({ value, newRef }) => {
  const [togglePassword, setTogglePassword] = useState(false);

  useEffect(() => {
    if (togglePassword && newRef) {
      newRef.current.type = 'text';
    } else {
      newRef.current.type = 'password';
    }
  }, [togglePassword, newRef]);

  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 relative"
      >
        {value}
      </label>
      <input
        ref={newRef}
        type="password"
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      {!togglePassword ? (
        <i
          onClick={() => setTogglePassword(true)}
          className="text-lg bi bi-eye-slash text-white absolute top-8 right-5 cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={() => setTogglePassword(false)}
          className="text-lg bi bi-eye text-white absolute top-8 right-5  cursor-pointer"
        ></i>
      )}
    </div>
  );
};
