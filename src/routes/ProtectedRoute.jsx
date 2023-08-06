import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const token = JSON.parse(sessionStorage.getItem('token'));
  // if(!token) {
  //   navigate('/login')
  // }
  return (token ? {children} : <Navigate to='/login' />);
};
