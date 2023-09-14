import { classNames } from 'shared/lib/classNames/classNames';
import {
  FC, ReactElement, ReactNode, useState,
} from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../icons';
import cls from './Dropdown.module.scss';

interface DropdownItem {
  title: string;
  id: number;
}

interface DropdownProps {
  className?: string;
  buttonClassName?: string;
  title: string;
  extraIcon: ReactElement;
  items: DropdownItem[];
}

export const Dropdown: FC<DropdownProps> = ({
  className,
  title,
  items,
  extraIcon,
  buttonClassName,
}) => {
  const [activeItem, setActiveItem] = useState<DropdownItem>({ title, id: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: DropdownItem) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <div className={classNames(cls.Dropdown, {}, [className])}>
      <Button className={classNames(cls.Button, { [cls.active]: isOpen }, [buttonClassName])} onClick={handleDropdown}>
        {extraIcon}
        {activeItem.title}
        <Icon.ArrowDown className={cls['Icon-arrow']} />
      </Button>
      {isOpen && (
        <ul className={cls.Menu}>
          {items.map((item) => (
            <li aria-hidden onClick={() => handleItemClick(item)} className={cls.Item} key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
