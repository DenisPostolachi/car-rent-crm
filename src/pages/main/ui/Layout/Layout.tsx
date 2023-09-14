import { Header } from 'widgets/Header';
import { Availability } from '../Availability/Availability';
import { OrdersStatuses } from '../OrdersStatuses/OrdersStatuses';
import { Summary } from '../Summary/Summary';

import cls from './Layout.module.scss';

// TODO: Переименовать
export const Layout = () => (
  <div className={cls.Layout}>
    <Header />
    <Availability className={cls.Availability} />
    <OrdersStatuses className={cls.Status} />
    <Summary className={cls.Summary} />
  </div>
);
