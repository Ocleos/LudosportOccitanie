import { PLACES, type Place } from './places';

export type CourseSchool = 'montpellier' | 'nimes';

export type Course = {
  assistant?: string;
  day: string;
  endTime: string;
  instructor: string;
  place: Place;
  school: CourseSchool;
  startTime: string;
  title: string;
};

export const COURSES: Course[] = [
  {
    assistant: 'Lorick Vergnes',
    day: 'Mardi',
    endTime: '22h30',
    instructor: 'Nicolas Cortez',
    place: PLACES.montpellier,
    school: 'montpellier',
    startTime: '20h30',
    title: 'Forme 1',
  },
  {
    assistant: 'Olivier Carrara',
    day: 'Vendredi',
    endTime: '22h30',
    instructor: 'Kévin Claux',
    place: PLACES.montpellier,
    school: 'montpellier',
    startTime: '20h30',
    title: 'Forme 2',
  },
  {
    day: 'Lundi',
    endTime: '22h30',
    instructor: 'Raphaël Romero',
    place: PLACES.montpellier,
    school: 'montpellier',
    startTime: '20h30',
    title: 'Forme 3 Long',
  },
  {
    day: 'Jeudi',
    endTime: '22h30',
    instructor: 'Raphaël Romero',
    place: PLACES.montpellier,
    school: 'montpellier',
    startTime: '20h30',
    title: 'Forme 5 Long',
  },
  {
    day: 'Mardi',
    endTime: '22h30',
    instructor: 'Romain Argillier',
    place: PLACES.caissargues,
    school: 'nimes',
    startTime: '21h00',
    title: 'Forme 1',
  },
  {
    day: 'Mardi',
    endTime: '22h30',
    instructor: 'Adrien Thorent',
    place: PLACES.caissargues,
    school: 'nimes',
    startTime: '21h00',
    title: 'Forme 2',
  },
  {
    day: 'Lundi',
    endTime: '22h30',
    instructor: 'Frédéric Coschemique',
    place: PLACES.nimes,
    school: 'nimes',
    startTime: '20h30',
    title: 'Forme 5 Long',
  },
];
