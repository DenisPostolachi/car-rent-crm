import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ReactNode } from 'react';
import cls from './NavButton.module.scss';

interface NavButtonProps {
  className?: string;
  icon: ReactNode;
  title: string;
  active: boolean;
}

export const NavButton = ({
  className,
  title,
  icon,
  active,
}: NavButtonProps) => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <Button onClick={handleClick} className={classNames(cls.NavButton, { [cls.active]: active }, [className])}>
      {active && (<div className={cls.Indicator} />)}
      <div className={cls['NavButton-icon']}>
        {icon}
      </div>
      <div className={cls['NavButton-title']}>
        {title}
      </div>
    </Button>
  );
};
