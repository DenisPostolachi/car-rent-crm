export type PieItem = {
  title: string;
  value: number;
  color: string;
  difference: 'Up' | 'Down';
};
export type StatsItem = {
  count: number,
  lastWeekCount: number,
  yesterdayCount: number,
  difference: number,
}
export type StatisticsData = {
  Income: StatsItem,
  Expences: StatsItem,
  HireCancel: PieItem[],
};
