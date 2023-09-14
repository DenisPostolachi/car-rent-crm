import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Picker from 'react-datepicker';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DatePicker.module.scss';

import { Icon } from '../icons';

interface DatePickerProps {
className?: string;
}

export const DatePicker = ({ className }: DatePickerProps) => {
  const [date, setDate] = useState(new Date());

  const handleSetDate = (date: any) => {
    console.log(date);
  };
  return (
    <div className={classNames(cls.DatePicker, {}, [className])}>
      <Icon.Calendar className={cls.Icon} />
      <Picker
        className={cls.Input}
        selected={date}
        onChange={(date) => handleSetDate(date)}
        dateFormat="MMM dd, yyyy"
      />
    </div>
  );
};
