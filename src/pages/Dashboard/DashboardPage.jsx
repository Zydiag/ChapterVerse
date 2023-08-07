import { useEffect, useState } from 'react';
import { DashboardCard } from './components/DashboardCard';
import { DashboardEmpty } from './components/DashboardEmpty';
import { getUserOrders } from '../../services';
import { useTitle } from '../../hooks';

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const token = JSON.parse(sessionStorage.getItem('token'));
  const cvid = JSON.parse(sessionStorage.getItem('cvid'));
  useTitle('Dashboard');

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getUserOrders();
      setOrders(data);
    };
    fetchOrders();
  }, [token, cvid]);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.map((order) => {
          return <DashboardCard key={order.id} order={order} />;
        })}
      </section>

      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};
