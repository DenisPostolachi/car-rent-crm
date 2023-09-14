import { MainPage } from 'pages/main/ui/MainPage';

// Здесь должны быть нормальный конфиг роута со ссылками и путями, но у нас 1 страница
export enum AppRouts {
  MAIN = 'main',
  DRIVERS = 'drivers',
  BOOKINGS = 'bookings',
  NOTIFICATIONS = 'notifications',
  SETTINGS = 'settings',
  PAYMENT_DETAILS = 'paymentDetails',
  TRANSACTIONS = 'transactions',
  CAR_REPORT = 'carReport'
}

export const RoutePath: Record<AppRouts, string> = {
  [AppRouts.MAIN]: '/',
  [AppRouts.DRIVERS]: '/drivers',
  [AppRouts.BOOKINGS]: '/bookings',
  [AppRouts.NOTIFICATIONS]: '/notifications',
  [AppRouts.SETTINGS]: '/settings',
  [AppRouts.PAYMENT_DETAILS]: '/paymentDetails',
  [AppRouts.TRANSACTIONS]: '/transactions',
  [AppRouts.CAR_REPORT]: '/carReport',
};

export const routeConfig = {
  [AppRouts.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
