import { App } from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
