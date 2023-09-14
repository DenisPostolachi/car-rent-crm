import { classNames } from 'shared/lib/classNames/classNames';
import { FC, HTMLAttributes } from 'react';
import cls from './Input.module.scss';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className, id, ...otherProps } = props;
  return (
    <label htmlFor={id} className={classNames(cls.Label, {}, [className])}>
      <input id={id} className={cls.Input} type="text" {...otherProps} />
    </label>
  );
};
