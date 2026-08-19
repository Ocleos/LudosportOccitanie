import { createFileRoute } from '@tanstack/react-router';
import Places from '../components/places/places.component';
import { buildPageHead } from '../utils/seo.utils';

export const Route = createFileRoute('/cours')({
  component: Places,
  head: () =>
    buildPageHead({
      description:
        'Les cours hebdomadaires de Ludosport Occitanie à Montpellier et Nîmes : horaires, instructeurs et lieux d’entraînement.',
      path: '/cours',
      title: 'Nos cours - Ludosport Occitanie',
    }),
});
