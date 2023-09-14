import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Icon } from '../icons';
import cls from './Search.module.scss';

interface SearchProps {
  className?: string;
  onSearch: () => void;
}

export const Search = ({ className, onSearch }: SearchProps) => (
  <div className={classNames(cls.Search, {}, [className])}>
    <Input placeholder="Search here" className={cls.Input} id="search" />
    <Button className={cls.Button} onClick={onSearch}><Icon.Search /></Button>
  </div>
);
