import { createFileRoute } from '@tanstack/react-router';
import Presentation from 'src/components/presentation/presentation.component';
import { buildPageHead } from 'src/utils/seo.utils';

export const Route = createFileRoute('/le-sport')({
  component: Presentation,
  head: () =>
    buildPageHead({
      description:
        'Le Ludosport : sept formes de combat, trois armes (sabre long, dagues, bâton), le parcours de progression et les principes Se.Cu.Ri. Découvrez le sport de combat au sabre laser.',
      path: '/le-sport',
      title: 'Le Sport - Ludosport Occitanie',
    }),
});
