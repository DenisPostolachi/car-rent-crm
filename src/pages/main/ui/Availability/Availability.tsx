import { classNames } from 'shared/lib/classNames/classNames';
import { Paper } from 'shared/ui/Paper/Paper';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Icon } from 'shared/ui/icons';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import cls from './Availability.module.scss';

interface AvailabilityProps {
className?: string;
}

const items = [
  {
    title: '123123',
    id: 1,
  },
  {
    title: '223123',
    id: 2,
  },
  {
    title: '323123',
    id: 3,
  },
  {
    title: '423123',
    id: 4,
  },
];

const handleCheck = () => {
  console.log('123');
};

export const Availability = ({ className }: AvailabilityProps) => (
  <Paper
    className={className}
    title="Car Availability"
  >
    <div className={cls.Container}>
      <Dropdown
        extraIcon={<Icon.Car className={cls['Icon-content']} />}
        className={classNames(cls.Dropdown, {}, [cls['Dropdown-number']])}
        title="Car Number"
        items={items}
      />
      <DatePicker className={cls.DatePicker} />
      <Dropdown
        title="10 AM"
        items={items}
        buttonClassName={cls['Dropdown-time-button']}
        className={classNames(cls.Dropdown, {}, [cls['Dropdown-time']])}
        extraIcon={<Icon.Clock className={cls['Icon-content']} />}
      />
      <Button
        theme={ButtonThemes.PRIMARY}
        size="m"
        onClick={handleCheck}
      >
        Check
      </Button>
    </div>
  </Paper>
);
