import SpadaMontpellier from '../assets/SpadaMontpellier.svg';
import SpadaNimes from '../assets/SpadaNimes.svg';

function Places() {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>
        Écoles / Planning Entrainements
      </span>

      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        <div className='flex flex-col gap-4 rounded-lg border-2 p-4 text-center'>
          <p className='font-bold text-lg'>Montpellier</p>
          <p>
            Training Go Montpellier Près d'arènes
            <br />
            495 Av. du Mas d'Argelliers
            <br />
            34070 Montpellier
          </p>

          <img src={SpadaMontpellier} alt='Spada Montpellier' className='mx-auto h-48' />

          <ul>
            <li className='mb-2'>
              Forme 1 : <br />
              Lundi 20h30 - 22h30
              <br />
              Mercredi 20h45 - 22h45
            </li>
            <li className='mb-2'>
              Forme 2 : <br />
              Mercredi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Forme 3 : <br />
              Mardi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Forme 5 : <br />
              Jeudi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Masterclass : <br />
              Vendredi 20h30 - 22h30
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-4 rounded-lg border-2 p-4 text-center'>
          <p className='font-bold text-lg'>Nîmes</p>
          <p>
            Planète Fitness - Nîmes Carré Sud
            <br />
            310 Rue Paul Laurent
            <br />
            30900 Nîmes
          </p>

          <img src={SpadaNimes} alt='Spada Nîmes' className='mx-auto h-48' />

          <ul>
            <li className='mb-2'>
              Forme 1 : <br />
              Mardi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Forme 3 : <br />
              Lundi 20h30 - 22h30
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Places;
