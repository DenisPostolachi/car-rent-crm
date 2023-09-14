/* eslint-disable react/prop-types */
import { classNames } from 'shared/lib/classNames/classNames';
import type { FC, ReactElement, ReactNode } from 'react';
import cls from './Paper.module.scss';

interface PaperProps {
  className?: string;
  headerClassName?: string;
  title: string;
  RightElement?: ReactElement;
  children: ReactNode;
}

export const Paper: FC<PaperProps> = ({
  className,
  headerClassName,
  title,
  RightElement,
  children,
}) => (
  <div className={classNames(cls.Paper, {}, [className])}>
    <div className={classNames(cls.Header, {}, [headerClassName])}>
      <div className={cls.Title}>{title}</div>
      {RightElement}
    </div>
    {children}
  </div>
);
