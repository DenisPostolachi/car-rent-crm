import { classNames } from 'shared/lib/classNames/classNames';
import { Paper } from 'shared/ui/Paper/Paper';
import cls from './Turnover.module.scss';

const getDifference = (difference: number) => {
  if (difference < 0) {
    return (
      <div className={classNames(cls.Difference, {}, [cls.Negative])}>{`↓ ${difference}%`}</div>
    );
  }
  if (difference > 0) {
    return (
      <div className={classNames(cls.Difference, {}, [cls.Positive])}>{`↑ ${difference}%`}</div>
    );
  }
  return (
    <div className={classNames(cls.Difference, {}, [])}>{`${difference}%`}</div>
  );
};

interface TurnoverProps {
  className?: string;
  title: string;
  type: string;
  count: number;
  yesterdayCount: number;
  lastWeekCount: number;
  difference: number;
}
export const Turnover = ({
  className,
  title,
  count,
  type,
  yesterdayCount,
  lastWeekCount,
  difference,
}: TurnoverProps) => (
  <Paper
    className={className}
    headerClassName={cls.Header}
    title={title}
    RightElement={<div className={cls.RightElement}>Today</div>}
  >
    <div className={cls.Money}>
      <span className={cls['Money-count']}>{`$ ${count}`}</span>
      <div className={cls['Money-difference']}>
        {getDifference(difference)}
      </div>
    </div>
    <div className={cls.Yesterday}>
      Compared to $
      {yesterdayCount}
      {' '}
      yesterday
    </div>
    <div className={cls.LastWeek}>
      Last week
      {' '}
      {type}
      <span>
        $
        {lastWeekCount}
      </span>
    </div>
  </Paper>
);
