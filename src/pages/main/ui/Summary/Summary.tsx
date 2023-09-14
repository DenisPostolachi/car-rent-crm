import { classNames } from 'shared/lib/classNames/classNames';
import { Paper } from 'shared/ui/Paper/Paper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import cls from './Summary.module.scss';

interface SummaryProps {
className?: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export const dataChart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [440, 200, 300, 100, 500, 50],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [5, 255, 173, 242, 385, 140],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const Summary = ({ className }: SummaryProps) => {
  const a = 1;
  return (
    <Paper title="Earning Summary" className={classNames(cls.Summary, {}, [className])}>

      <Line
        options={options}
        data={dataChart}
        className={cls.Chart}
        // {...props}
      />
    </Paper>
  );
};
