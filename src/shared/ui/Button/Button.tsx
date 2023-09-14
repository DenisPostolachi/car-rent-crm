import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'Clear',
  PRIMARY = 'Primary',
  SECONDARY = 'Secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
  onClick: () => void;
  size?: 's' | 'm' | 'l';
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    size = 'm',
    theme = ButtonThemes.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(cls.Button, {}, [className, cls[theme], cls[`Button-${size}`]])}
      {...otherProps}
    >
      {children}
    </button>

  );
};
