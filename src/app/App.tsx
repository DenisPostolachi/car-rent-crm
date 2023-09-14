import { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import AppRouter from './providers/routes/ui/AppRouter';

import './styles/index.scss';

export const App = () => (
  // Здесь должны быть роуты, но у нас одна страница
  <div className="app">
    <Suspense fallback="">
      <Sidebar />
      <AppRouter />
    </Suspense>
  </div>
);
