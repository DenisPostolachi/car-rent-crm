import { classNames } from 'shared/lib/classNames/classNames';
import { Search } from 'shared/ui/Search/Search';
import { Icon } from 'shared/ui/icons';
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import cls from './Header.module.scss';

interface HeaderProps {
className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  // Весь notify вместе со стейтом, иконкой, подгрузкой по надобности и т.д. нужно вынести в отдельный компонент, с собственным состоянием
  // Чтобы не было лишних перерендров
  const [notifyIsOpen, setNotifyIsOpen] = useState(false);

  const onSearch = () => {
    console.log('123');
  };

  const handleNotifyClick = () => {
    console.log('click');
    setNotifyIsOpen(!notifyIsOpen);
  };

  return (
    <div className={classNames(cls.Header, {}, [className])}>
      <Button onClick={handleNotifyClick} className={cls.Notify}><Icon.Notify /></Button>
      <Search onSearch={onSearch} className={cls.Search} />
    </div>
  );
};
