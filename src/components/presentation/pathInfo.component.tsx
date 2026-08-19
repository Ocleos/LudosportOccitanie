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
import Weapons from '../../assets/photos/3weapons.webp';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';
import MaskIcon from '../ui/maskIcon.component';
import Title from '../ui/title.component';

const forms = [
  { icon: F1, label: 'Forme I : équilibrée et sûre' },
  { icon: F2, label: 'Forme II : rapide et explosive' },
  { icon: F3, label: 'Forme III : fluide et trompeuse' },
  { icon: F4, label: 'Forme IV : acrobatique et imprévisible' },
  { icon: F5, label: 'Forme V : rapide et puissante' },
  { icon: F6, label: 'Forme VI : sophistiquée et insidieuse' },
  { icon: F7, label: 'Forme VII : impétueuse et dominante' },
];

const weapons = [
  {
    description: "L'arme de base : maniable à une ou deux mains, elle offre vitesse, allonge et précision",
    icon: Long,
    label: 'Sabre Long',
  },
  {
    description:
      'Deux sabres courts pour un style vif et imprévisible, cette arme exigeante offre une dynamique de combat spectaculaire à base de frappes multiples et défenses complexes',
    icon: Dual,
    label: 'Dagues',
  },
  {
    description:
      "Ce sabre à double lame offre une large palette de mouvements pour attaquer et défendre simultanément afin de prendre le contrôle de l'arène",
    icon: Staff,
    label: 'Bâton',
  },
];

const pathColumns = [
  { colorClass: 'bg-taupe-500/75', icon: F1, label: 'Forme I', merged: false, weaponIndices: [0] },
  { colorClass: 'bg-taupe-500/75', icon: F2, label: 'Forme II', merged: false, weaponIndices: [0] },
  { colorClass: 'bg-taupe-500/75', icon: Fy, label: 'Cours Y', merged: true, weaponIndices: [0, 1, 2] },
  { colorClass: 'bg-primary/75', icon: F3, label: 'Forme III', merged: false, weaponIndices: [0, 1, 2] },
  { colorClass: 'bg-primary/75', icon: F4, label: 'Forme IV', merged: false, weaponIndices: [0, 1, 2] },
  { colorClass: 'bg-primary/75', icon: F5, label: 'Forme V', merged: false, weaponIndices: [0, 1, 2] },
  {
    colorClass: 'bg-indigo-500/75',
    icon: F6,
    label: 'Forme VI',
    merged: true,
    subtitle: '3 armes',
    weaponIndices: [0, 1, 2],
  },
  {
    colorClass: 'bg-indigo-500/75',
    icon: F7,
    label: 'Forme VII',
    merged: true,
    subtitle: '3 armes',
    weaponIndices: [0, 1, 2],
  },
];

const PathInfo = () => {
  return (
    <>
      <Title id='path-title' text='Parcours' />

      <div className='w-full overflow-hidden rounded-lg md:w-3/4'>
        <img alt='3 armes différentes' className='h-full w-full object-cover' loading='lazy' src={Weapons} />
      </div>

      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={LayersIcon} label='Sept formes de combat' />
          </p>

          <p>
            Le Ludosport se divise en sept formes distinctes, chacune avec ses propres techniques, styles de combat et
            philosophie qui, mélangées, permettront à chaque athlète de créer son style de combat unique :
          </p>

          <ul className='flex flex-col gap-2'>
            {forms.map((form) => (
              <li key={form.label}>
                <LabelIcon icon={form.icon} label={form.label} />
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={SwordsIcon} label='3 armes' />
          </p>

          <p>Le Ludosport se pratique avec trois types d'armes, chacune offrant un style de combat unique :</p>

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
      </div>

      <Card className='w-full'>
        <p className='font-bold text-xl'>
          <LabelIcon icon={RouteIcon} label="Le parcours d'apprentissage" />
        </p>

        {/* Portrait layout (forms as rows, weapons as columns) — fits mobile widths without scrolling */}
        <div className='overflow-x-auto lg:hidden'>
          <table className='w-full border-collapse text-center'>
            <caption className='sr-only'>
              Les formes de combat et les armes utilisées pour chacune, regroupées par étape d'apprentissage
            </caption>

            <thead>
              <tr>
                <td aria-hidden='true' className='border border-gray-500 p-0' />
                {weapons.map((weapon) => (
                  <th className='border border-gray-500 p-2' key={weapon.label} scope='col'>
                    <MaskIcon className='mx-auto bg-white' icon={weapon.icon} />
                    <span className='sr-only'>{weapon.label}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {pathColumns.map((column) => (
                <tr key={column.label}>
                  <th className='border border-gray-500 p-2' scope='row'>
                    <MaskIcon className='mx-auto bg-white' icon={column.icon} />
                    <span className='sr-only'>{column.label}</span>
                  </th>

                  {weapons.map((weapon, weaponIndex) => {
                    const usable = column.weaponIndices.includes(weaponIndex);

                    if (column.merged) {
                      if (weaponIndex !== 0) {
                        return null;
                      }

                      return (
                        <td
                          className={`border border-gray-500 p-2 ${column.colorClass}`}
                          colSpan={column.weaponIndices.length}
                          key={weapon.label}>
                          <span className='block font-bold'>{column.label}</span>
                          {column.subtitle && <span className='block text-xs opacity-80'>{column.subtitle}</span>}
                        </td>
                      );
                    }

                    if (!usable) {
                      return (
                        <td className='border border-gray-500 p-2' key={weapon.label}>
                          <span className='sr-only'>
                            {column.label} : non pratiquée avec {weapon.label}
                          </span>
                        </td>
                      );
                    }

                    return (
                      <td className={`border border-gray-500 p-2 ${column.colorClass}`} key={weapon.label}>
                        <span className='block font-bold'>{column.label}</span>
                        {column.weaponIndices.length > 1 && (
                          <span className='block text-xs opacity-80'>{weapon.label}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Landscape layout (weapons as rows, forms as columns) — desktop only, enough width to stay readable */}
        <div className='hidden overflow-x-auto lg:block'>
          <table className='w-full border-collapse text-center'>
            <caption className='sr-only'>
              Les formes de combat et les armes utilisées pour chacune, regroupées par étape d'apprentissage
            </caption>

            <thead>
              <tr>
                <td aria-hidden='true' className='border border-gray-500 p-0' />
                {pathColumns.map((column) => (
                  <th className='border border-gray-500 p-2' key={column.label} scope='col'>
                    <MaskIcon className='mx-auto bg-white' icon={column.icon} />
                    <span className='sr-only'>{column.label}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {weapons.map((weapon, weaponIndex) => (
                <tr key={weapon.label}>
                  <th className='border border-gray-500 p-2' scope='row'>
                    <MaskIcon className='mx-auto bg-white' icon={weapon.icon} />
                    <span className='sr-only'>{weapon.label}</span>
                  </th>

                  {pathColumns.map((column) => {
                    const usable = column.weaponIndices.includes(weaponIndex);

                    if (column.merged) {
                      if (weaponIndex !== 0) {
                        return null;
                      }

                      return (
                        <td
                          className={`border border-gray-500 p-2 ${column.colorClass}`}
                          key={column.label}
                          rowSpan={column.weaponIndices.length}>
                          <span className='block font-bold'>{column.label}</span>
                          {column.subtitle && <span className='block text-xs opacity-80'>{column.subtitle}</span>}
                        </td>
                      );
                    }

                    if (!usable) {
                      return (
                        <td className='border border-gray-500 p-2' key={column.label}>
                          <span className='sr-only'>
                            {column.label} : non pratiquée avec {weapon.label}
                          </span>
                        </td>
                      );
                    }

                    return (
                      <td className={`border border-gray-500 p-2 ${column.colorClass}`} key={column.label}>
                        <span className='block font-bold'>{column.label}</span>
                        {column.weaponIndices.length > 1 && (
                          <span className='block text-xs opacity-80'>{weapon.label}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
          <div className='flex flex-row gap-2'>
            <div className='size-6 rounded-lg border border-gray-500 bg-taupe-500/75'>&nbsp;</div>
            Formes de base
          </div>

          <div className='flex flex-row gap-2'>
            <div className='size-6 rounded-lg border border-gray-500 bg-primary/75'>&nbsp;</div>
            Formes Avancées
          </div>

          <div className='flex flex-row gap-2'>
            <div className='size-6 rounded-lg border border-gray-500 bg-indigo-500/75'>&nbsp;</div>
            Formes de Maîtres
          </div>
        </div>
      </Card>
    </>
  );
};

export default PathInfo;
