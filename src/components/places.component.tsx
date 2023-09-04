import SpadaLunel from '../assets/SpadaLunel.svg';
import SpadaMontpellier from '../assets/SpadaMontpellier.svg';
import SpadaNimes from '../assets/SpadaNimes.svg';

function Places() {
  return (
    <div>
      <span className='text-primary text-center font-bold block uppercase text-xl mb-4'>
        Écoles / Planning Entrainements
      </span>

      <div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-4'>
        <div className='border-2 p-4 text-center rounded-lg flex flex-col gap-4'>
          <p className='font-bold text-lg'>Montpellier</p>
          <p>
            Training Go Montpellier Près d'arènes
            <br />
            495 Av. du Mas d'Argelliers
            <br />
            34070 Montpellier
          </p>

          <img src={SpadaMontpellier} alt='Spada Montpellier' className='h-48 mx-auto' />

          <ul>
            <li className='mb-2'>
              Forme 1 : <br />
              Mercredi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Forme 2 : <br />
              Mardi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Forme 3 : <br />
              Jeudi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Forme 5 : <br />
              Vendredi 20h30 - 22h30
            </li>
          </ul>
        </div>

        <div className='border-2 p-4 text-center rounded-lg flex flex-col gap-4'>
          <p className='font-bold text-lg'>Nîmes</p>
          <p>
            Planète Fitness - Nîmes Carré Sud
            <br />
            310 Rue Paul Laurent
            <br />
            30900 Nîmes
          </p>

          <img src={SpadaNimes} alt='Spada Nîmes' className='h-48 mx-auto' />

          <ul>
            <li className='mb-2'>
              Forme 1 : <br />
              Mardi 20h30 - 22h30
            </li>
            <li className='mb-2'>
              Forme 2 : <br />
              Lundi 20h30 - 22h30
            </li>
          </ul>
        </div>

        <div className='border-2 p-4 text-center rounded-lg flex flex-col gap-4'>
          <p className='font-bold text-lg'>Lunel</p>
          <p>
            Halle de Sport Alain Le Hetet
            <br />
            201 Chem. des Cabanettes
            <br />
            34400 Lunel
          </p>

          <img src={SpadaLunel} alt='Spada Lunel' className='h-48 mx-auto' />

          <ul>
            <li className='mb-2'>
              Cours Combat * : <br />
              Lundi 20h30 - 22h30
            </li>
          </ul>

          <p className='text-sm'>* : Les cours de Lunel sont réservés aux membres inscrits à Montpellier ou Nîmes</p>
        </div>
      </div>
    </div>
  );
}

export default Places;
