import { classNames } from 'shared/lib/classNames/classNames';

import { Icon } from 'shared/ui/icons';
import { Nav } from './Nav';
import { PAGES } from '../config/config';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => (
  <aside className={classNames(cls.Sidebar, {}, [className])}>
    <div className={cls['Sidebar-header']}>
      <Icon.Logo />
      <h1>Car Rent</h1>
    </div>
    <Nav pages={PAGES} />
  </aside>
);
