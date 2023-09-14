import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Pages } from '../config/types';
import { NavButton } from './NavButton';
import cls from './Nav.module.scss';

type NavProps = {
  pages: Pages;
};

export const Nav = ({ pages }: NavProps) => (
  <div className={cls.Nav}>
    <ul className={classNames(cls['Nav-list'], {}, [cls['Nav-main']])}>
      <li>
        {pages.MainBlock.map((page) => (
          <NavButton
            title={page.title}
            key={page.title}
            // Хардкод, т.к. у нас нет страниц
            active={page.title === 'Dashboard'}
            icon={page.icon}
          />
        ))}
      </li>
    </ul>
    <ul className={classNames(cls['Nav-list'], {}, [cls['Nav-report']])}>
      <div className={cls['Nav-report__title']}>Report</div>
      {pages.Report.map((page) => (
        <li>
          <NavButton
            title={page.title}
            key={page.title}
            active={false}
            icon={page.icon}
          />
        </li>
      ))}
    </ul>
    <Button onClick={() => console.log('logout')} className={cls.Logout} />
  </div>
);
