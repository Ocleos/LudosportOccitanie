import { createFileRoute } from '@tanstack/react-router';
import Events from '../components/events/events.component';
import { buildPageHead } from '../utils/seo.utils';

export const Route = createFileRoute('/evenements')({
  component: Events,
  head: () =>
    buildPageHead({
      description:
        'Retrouvez Ludosport Occitanie lors des prochains forums des associations et événements sportifs à Montpellier, Nîmes et Caissargues.',
      path: '/evenements',
      title: 'Événements - Ludosport Occitanie',
    }),
});
