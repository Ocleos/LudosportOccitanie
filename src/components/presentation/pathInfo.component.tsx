import { LayersIcon, RouteIcon, SwordsIcon } from 'lucide-react';
import Dual from '../../assets/icons/dual.svg';
import F1 from '../../assets/icons/f1.svg';
import F2 from '../../assets/icons/f2.svg';
import F3 from '../../assets/icons/f3.svg';
import F4 from '../../assets/icons/f4.svg';
import F5 from '../../assets/icons/f5.svg';
import F6 from '../../assets/icons/f6.svg';
import F7 from '../../assets/icons/f7.svg';
import Fy from '../../assets/icons/fy.svg';
import Long from '../../assets/icons/long.svg';
import Staff from '../../assets/icons/staff.svg';
import PathHorizontal from '../../assets/path/PathHorizontal.webp';
import PathVertical from '../../assets/path/PathVertical.webp';
import Weapons from '../../assets/photos/3weapons.webp';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';
import Title from '../ui/title.component';

const forms = [
  { icon: F1, label: 'Forme I : stable et équilibrée' },
  { icon: F2, label: 'Forme II : offensive et explosive' },
  { icon: Fy, label: 'Cours Y : préparatoire' },
  { icon: F3, label: 'Forme III : fluide et trompeuse' },
  { icon: F4, label: 'Forme IV : changeante et imprévisible' },
  { icon: F5, label: 'Forme V : menaçante et puissante' },
  { icon: F6, label: 'Forme VI : sophistiquée' },
  { icon: F7, label: 'Forme VII : agressive' },
];

const weapons = [
  {
    description: 'Le standard : une lame longue et une utilisation à une ou deux mains',
    icon: Long,
    label: 'Sabre Long',
  },
  {
    description: 'Deux lames courtes et un sabre dans chaque main',
    icon: Dual,
    label: 'Dagues',
  },
  {
    description: 'Un long manche avec des lames intermédiaires de chaque côté',
    icon: Staff,
    label: 'Bâton',
  },
];

const PathInfo = () => {
  return (
    <>
      <Title id='path-title' text='Parcours' />

      <div className='w-full overflow-hidden rounded-lg md:w-3/4'>
        <img alt='3 armes différentes' className='h-full w-full object-cover' loading='lazy' src={Weapons} />
      </div>

      <Card className='w-full'>
        <p className='font-bold text-xl'>
          <LabelIcon icon={LayersIcon} label='Les formes de combat' />
        </p>

        <p>
          Cycle Primaire, dans lequel les élèves apprennent la Forme 1 et la Forme 2, axée respectivement sur les
          techniques du sabre long à deux mains et à une main. Par la suite, ils sont initiés à l'utilisation des Sabres
          Doubles et du Bâton-Sabre dans le Cours Y. Pour accéder au Cycle Avancé, il est nécessaire de réussir l'examen
          de Rang Accademico.
        </p>

        <ul className='flex flex-col gap-2'>
          {forms
            .filter((_, index) => index < 3)
            .map((form) => (
              <li key={form.label}>
                <LabelIcon icon={form.icon} label={form.label} />
              </li>
            ))}
        </ul>

        <p>
          Cycle Avancé, dans lequel les étudiants peuvent choisir l'arme qu'ils souhaitent étudier, en progressant avec
          les Formes 3, 4 et 5, où ils approfondissent respectivement leur compréhension de la Réaction, du Mouvement et
          de l'Action en entraînant chaque arme contre une arme du même type. Pour accéder au Cycle du Maître, il est
          nécessaire de passer l'examen du rang de Cavaliere.
        </p>

        <ul className='flex flex-col gap-2'>
          {forms
            .filter((_, index) => index >= 3 && index < 6)
            .map((form) => (
              <li key={form.label}>
                <LabelIcon icon={form.icon} label={form.label} />
              </li>
            ))}
        </ul>

        <p>
          Cycle de Master, dans lequel les étudiants perfectionnent, avec les Formes 6 et 7, la maîtrise des trois armes
          et apprennent à appliquer leurs compétences même lorsqu'ils affrontent des adversaires qui utilisent
          différentes armes. Le cycle se termine par le passage de l’examen de rang Maestro.
        </p>

        <ul className='flex flex-col gap-2'>
          {forms
            .filter((_, index) => index >= 6)
            .map((form) => (
              <li key={form.label}>
                <LabelIcon icon={form.icon} label={form.label} />
              </li>
            ))}
        </ul>
      </Card>

      <Card className='w-full'>
        <p className='font-bold text-xl'>
          <LabelIcon icon={SwordsIcon} label='3 types de sabres laser' />
        </p>

        <p>Les athlètes auront accès à terme à 3 types de sabres laser :</p>

        <ul className='flex flex-col gap-3'>
          {weapons.map((weapon) => (
            <li key={weapon.label}>
              <div className='gap-2'>
                <LabelIcon icon={weapon.icon} label={weapon.label} />
                <p className='pl-8'>{weapon.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card className='w-full'>
        <p className='font-bold text-xl'>
          <LabelIcon icon={RouteIcon} label='Parcours' />
        </p>

        <picture>
          <source media='(min-width: 64rem)' srcSet={PathHorizontal} />
          <img
            alt="Schéma du parcours d'apprentissage LudoSport. Le Cycle Primaire (en gris) regroupe les Formes I et II ainsi que le Cours Y, pratiqués au sabre long. Le Cycle Avancé (en orange) couvre les Formes III, IV et V, où l'étudiant choisit parmi les trois armes. Le Cycle de Master (en violet) réunit les Formes VI et VII et la maîtrise des trois armes face à des adversaires armés différemment."
            className='mx-auto w-full max-w-md lg:max-w-full'
            loading='lazy'
            src={PathVertical}
          />
        </picture>
      </Card>
    </>
  );
};

export default PathInfo;
