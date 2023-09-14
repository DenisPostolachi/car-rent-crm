import { classNames } from 'shared/lib/classNames/classNames';
import { Paper } from 'shared/ui/Paper/Paper';
import { PieChart } from 'react-minimal-pie-chart';
import { PieItem } from 'pages/main/lib/types';
import cls from './HireCancel.module.scss';

interface HireCancelProps {
  className?: string;
  title: string;
  items: PieItem[];

}
export const HireCancel = ({
  className,
  title,
  items,
}: HireCancelProps) => (
  <Paper
    className={className}
    headerClassName={cls.Header}
    title={title}
    RightElement={<div className={cls.RightElement}>Today</div>}
  >
    <div className={cls.Wrapper}>
      <div className={cls.Diagram}>
        <PieChart
          data={items}
          lineWidth={25}
        />
      </div>

      <ul className={cls.Items}>
        {items.map((item) => (
          <div className={cls.Item}>
            <div className={cls['Item-circle']} style={{ backgroundColor: item.color }} />
            <div className={cls['Item-title']}>{item.title}</div>
            <div className={cls['Item-change']}>
              {item.value}
              %
              {item.difference === 'Up' && (
                <span className={classNames(cls.Arrow, {}, [cls.Up])}>↑</span>
              )}
              {item.difference === 'Down' && (
                <span className={classNames(cls.Arrow, {}, [cls.Down])}>↓</span>
              )}
            </div>
          </div>

        ))}
      </ul>
    </div>
  </Paper>
);
