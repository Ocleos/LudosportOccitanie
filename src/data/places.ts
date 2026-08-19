import SpadaMontpellier from '../assets/SpadaMontpellier.svg';
import SpadaNimes from '../assets/SpadaNimes.svg';

export type Place = {
  id: string;
  name: string;
  logo: string;
  address: string;
  accesses: string[];
  latitude: number;
  longitude: number;
};

export const PLACES = {
  caissargues: {
    accesses: ['Bus Tram T4 : Caissargues (15 minutes de marche)'],
    address: 'Avenue de la dame, 30132 Caissargues',
    id: 'caissargues',
    latitude: 43.799979,
    logo: SpadaNimes,
    longitude: 4.380037,
    name: 'Centre St Exupéry Caissargues',
  },
  montpellier: {
    accesses: ['Tram T4 : Garcia Lorca (10 minutes de marche)', 'Bus Ligne 11 : Mas Argelliers'],
    address: "495 Av. du Mas d'Argelliers, 34070 Montpellier",
    id: 'montpellier',
    latitude: 43.586328,
    logo: SpadaMontpellier,
    longitude: 3.890499,
    name: "Training GO Montpellier Près-d'Arènes",
  },
  nimes: {
    accesses: ['Bus Tram T1, T4 : Parking relais A54', 'Bus lignes 6, 8, 43 : Paul Laurent'],
    address: '310 Rue Paul Laurent, 30900 Nîmes',
    id: 'nimes',
    latitude: 43.807997,
    logo: SpadaNimes,
    longitude: 4.364957,
    name: 'Planète Fitness Nîmes Carré Sud',
  },
} as const satisfies Record<string, Place>;
