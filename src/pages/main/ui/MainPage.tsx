import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Statistics } from './Statistics/Statistics';
import { Layout } from './Layout/Layout';

export const MainPage = () => (
  <div className={classNames(cls.MainPage)}>
    <Statistics />
    {/* TODO: Придумать нейминг */}
    <Layout />
  </div>
);
