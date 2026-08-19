export type NavLink = {
  label: string;
  to: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Le sport', to: '/le-sport' },
  { label: 'Cours', to: '/cours' },
  { label: 'Événements', to: '/evenements' },
  { label: 'Contacts', to: '/contacts' },
];
