import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { router } from './router';
import 'dayjs/locale/fr';

dayjs.locale('fr');
// Configuration of dayjs
dayjs.extend(localizedFormat);

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
