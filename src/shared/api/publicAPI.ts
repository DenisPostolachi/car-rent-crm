// Да, здесь у нас импорты из слоёв выше, но методология FSD не описывает пока как правильно реализовывать апи и такой вариант тоже допускается
import type { StatisticsData } from 'pages/main/lib/types';
import BaseAPI from './baseAPI';

export default class PublicAPI extends BaseAPI {
  getIncome = async (page: number): Promise<StatisticsData> => {
    try {
      const { data } = await this.get(`albums/${page}/photos`);
      const mockData: StatisticsData = {
        Income: {
          count: 9460,
          lastWeekCount: 25650,
          yesterdayCount: 9900,
          difference: -2.1,
        },
        Expences: {
          count: 7460,
          lastWeekCount: 22650,
          yesterdayCount: 6900,
          difference: 2.5,
        },
        HireCancel: [
          {
            title: 'One', value: 44, color: 'var(--primary-color)', difference: 'Up',
          },
          {
            title: 'Two', value: 30, color: 'var(--secondary-color)', difference: 'Up',
          },
          {
            title: 'Three', value: 26, color: 'var(--green-color)', difference: 'Down',
          },
        ],
      };
      console.log(data);
      return mockData;
    } catch (err) {
      return {} as StatisticsData;
    }
  };
}
