import { createFileRoute } from '@tanstack/react-router';
import Home from '../components/home.component';
import { buildPageHead } from '../utils/seo.utils';

export const Route = createFileRoute('/')({
  component: Home,
  head: () =>
    buildPageHead({
      description:
        "Ludosport Occitanie propose des cours de combat sportif au sabre laser, des séances d'entraînement et des cours d'essai en Occitanie.",
      title: 'Ludosport Occitanie - Combat sportif au sabre laser',
    }),
});
