export type EventItem = {
  title: string;
  location: string;
  startDate?: string;
  endDate?: string;
  fromDate?: string;
  time?: string;
  link?: string;
};

export const EVENTS: EventItem[] = [
  {
    endDate: '2026-08-30',
    link: 'https://activites.decathlon.fr/fr-FR/activites-sportives/details/12122543',
    location: 'Nîmes',
    startDate: '2026-08-29',
    time: 'De 9h à 19h',
    title: 'VitalSport Décathlon Nîmes',
  },
  {
    link: 'https://www.nimes.fr/que-faire-a-nimes/evenements/forum-des-associations',
    location: 'Nîmes',
    startDate: '2026-09-05',
    time: 'De 9h à 17h',
    title: 'Forum des Associations Nîmes',
  },
  {
    link: 'https://www.caissargues.fr/agenda/forum-des-associations/',
    location: 'Caissargues',
    startDate: '2026-09-06',
    time: 'De 10h à 13h',
    title: 'Forum des Associations Caissargues',
  },
  {
    link: 'https://www.montpellier.fr/campagnes/antigone-des-associations',
    location: 'Montpellier',
    startDate: '2026-09-06',
    time: 'De 9h30 à 17h30',
    title: 'Antigone des Associations Montpellier',
  },
  {
    endDate: '2026-09-13',
    link: 'https://activites.decathlon.fr/fr-FR/activites-sportives/details/12122441',
    location: 'Montpellier',
    startDate: '2026-09-12',
    time: 'De 9h à 19h',
    title: 'VitalSport Décathlon Montpellier',
  },
];
