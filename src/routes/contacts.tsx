import { createFileRoute } from '@tanstack/react-router';
import SocialsNetworks from 'src/components/socialsNetworks.component';
import Contacts from '../components/contacts.component';
import { buildPageHead } from '../utils/seo.utils';

export const Route = createFileRoute('/contacts')({
  component: ContactsLayout,
  head: () =>
    buildPageHead({
      description:
        'Contactez Ludosport Occitanie : email des écoles de Montpellier et Nîmes, téléphone et réseaux sociaux.',
      path: '/contacts',
      title: 'Contact - Ludosport Occitanie',
    }),
});

function ContactsLayout() {
  return (
    <>
      <Contacts />
      <SocialsNetworks />
    </>
  );
}
