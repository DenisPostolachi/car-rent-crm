import { classNames } from 'shared/lib/classNames/classNames';
import { getFormatedDate } from 'shared/lib/getFormatedDate/getFormatedDate';
import { StatisticsData } from 'pages/main/lib/types';
import { useEffect, useState } from 'react';
import { publicApi } from 'shared/api';
import { Turnover } from './Turnover';
import { HireCancel } from './HireCancel';
import cls from './Statistics.module.scss';

interface StatisticsProps {
className?: string;
}

const initialData: StatisticsData = {
  Income: {
    count: 1000,
    lastWeekCount: 1000,
    yesterdayCount: 1000,
    difference: 1,
  },
  Expences: {
    count: 1000,
    lastWeekCount: 1000,
    yesterdayCount: 1000,
    difference: 1,
  },
  HireCancel: [
    {
      title: 'One', value: 54, color: 'var(--primary-color)', difference: 'Up',
    },
    {
      title: 'Two', value: 20, color: 'var(--secondary-color)', difference: 'Up',
    },
    {
      title: 'Three', value: 26, color: 'var(--green-color)', difference: 'Down',
    },
  ],
};

export const Statistics = ({ className }: StatisticsProps) => {
  const [data, setData] = useState<StatisticsData>(initialData);

  useEffect(() => {
    const fetchStatistic = async () => {
      const response = await publicApi.getIncome(1);
      setData(response);
    };

    fetchStatistic();
  }, []);

  return (
    <div className={classNames(cls.Statistics, {}, [className])}>
      <h2 className={cls.Title}>Todays Statistics</h2>
      <div className={cls.Date}>{getFormatedDate()}</div>
      <Turnover
        className={cls.Turnover}
        title="Income"
        type="Income"
        count={data.Income.count}
        lastWeekCount={data.Income.lastWeekCount}
        yesterdayCount={data.Income.yesterdayCount}
        difference={data.Income.difference}
      />
      <Turnover
        className={cls.Turnover}
        title="Expences"
        type="expences"
        count={data.Expences.count}
        lastWeekCount={data.Expences.lastWeekCount}
        yesterdayCount={data.Expences.yesterdayCount}
        difference={data.Expences.difference}
      />
      <HireCancel
        title="Hire vs Cancel"
        items={data.HireCancel}
      />
    </div>
  );
};
