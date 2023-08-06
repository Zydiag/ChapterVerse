import { useLocation } from 'react-router-dom';
import { OrderFail } from './components/OrderFail';
import { OrderSuccess } from './components/OrderSuccess';
export const OrderPage = () => {
  const { state } = useLocation();
  const status = state?.status;
  return <main>{status ? <OrderSuccess data={state?.data} /> : <OrderFail />}</main>;
};
