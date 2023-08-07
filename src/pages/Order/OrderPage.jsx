import { useLocation } from 'react-router-dom';
import { OrderFail } from './components/OrderFail';
import { OrderSuccess } from './components/OrderSuccess';
import { useTitle } from '../../hooks'
export const OrderPage = () => {
  const { state } = useLocation();
  useTitle('Order Summary');
  const status = state?.status;
  return <main>{status ? <OrderSuccess data={state?.data} /> : <OrderFail />}</main>;
};
