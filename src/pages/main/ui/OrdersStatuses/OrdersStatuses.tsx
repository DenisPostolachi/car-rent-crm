import { classNames } from 'shared/lib/classNames/classNames';
import { Paper } from 'shared/ui/Paper/Paper';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import cls from './OrdersStatuses.module.scss';

type Status = 'Pending' | 'Completed' | 'In route';
const STATUSES = {
  COMPLETED: 'Completed',
  PENDING: 'Pending',
  IN_ROUTE: 'In route',
};
export type Order = {
  no: number,
  carNo: number,
  driver: {
    image: string,
    name: string,
  },
  status: Status,
  earning: number,
  id: number,
}
export type Orders = Order[];

const orders: Orders = [
  {
    no: 1,
    carNo: 6465,
    driver: {
      image: 'https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg',
      name: 'Alex Noman',
    },
    status: 'Completed',
    earning: 35.44,
    id: 123,
  },
  {
    no: 1,
    carNo: 4234,
    driver: {
      image: 'https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg',
      name: 'Alex Noman',
    },
    status: 'Pending',
    earning: 0.0,
    id: 122,
  },
  {
    no: 1,
    carNo: 7567,
    driver: {
      image: 'https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg',
      name: 'Alex Noman',
    },
    status: 'In route',
    earning: 35.44,
    id: 323,
  },
];

const getStatus = (status: Status) => (
  <span>
    <div className={classNames(cls['Status-circle'], {}, [cls[status]])} />
    {status}
  </span>
);

interface OrdersStatusesProps {
  className?: string;
}
export const OrdersStatuses = ({ className }: OrdersStatusesProps) => {
  const handleDetails = (id: number) => {
    console.log(`fetch ${id}`);
  };
  return (
    <Paper
      title="Live Car Status"
      className={classNames(cls.Container, {}, [className])}
    >
      <table className={cls.Table}>
        <thead className={cls['Table-head']}>
          <tr>
            <td className={cls.No}>No.</td>
            <td className={cls.CarNo}>Car no.</td>
            <td className={cls.Driver}>Driver</td>
            <td className={cls.Type}>Status</td>
            <td className={cls.Earning}>Earning</td>
          </tr>
        </thead>
        <tbody className={cls['Table-body']}>
          {orders.map((order) => (
            <tr>
              <td className={cls.No}><span>{order.no}</span></td>
              <td className={cls.CarNo}><span>{order.carNo}</span></td>
              <td className={cls.Driver}>
                <span>
                  <img src={order.driver.image} alt={order.driver.name} />
                  <div>{order.driver.name}</div>
                </span>
              </td>
              <td className={cls.Status}>
                <span>
                  <div className={classNames(cls['Status-circle'], {
                    [cls['Status-circle--completed']]: order.status === STATUSES.COMPLETED,
                    [cls['Status-circle--pending']]: order.status === STATUSES.PENDING,
                    [cls['Status-circle--inRoute']]: order.status === STATUSES.IN_ROUTE,
                  })}
                  />
                  <div className={cls['Status-text']}>{order.status}</div>
                </span>
              </td>
              <td className={cls.Earning}>
                <span>
                  {' '}
                  $
                  {' '}
                  {order.earning}
                </span>
              </td>
              <td className={cls.Details}>
                <Button
                  onClick={() => handleDetails(order.id)}
                  theme={ButtonThemes.PRIMARY}
                  size="s"
                >
                  Details
                </Button>

              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </Paper>
  );
};
