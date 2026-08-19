import { createFileRoute } from '@tanstack/react-router';
import TrialCourses from '../components/trialCourses.component';
import { buildPageHead } from '../utils/seo.utils';

export const Route = createFileRoute('/cours-essai')({
  component: TrialCourses,
  head: () =>
    buildPageHead({
      description:
        "Participez à un cours d'essai gratuit de Ludosport à Montpellier ou Nîmes : remplissez le formulaire et notre équipe vous recontacte.",
      path: '/cours-essai',
      title: "Cours d'essai gratuit - Ludosport Occitanie",
    }),
});
