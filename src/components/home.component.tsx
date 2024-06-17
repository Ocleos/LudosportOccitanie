import LudosportOccitanieLogo from '../assets/LudoSportOccitanie.svg';

function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col justify-center gap-6 xs:gap-4'>
      <img src={LudosportOccitanieLogo} alt='Ludosport Occitanie' className='w-48 self-center' />
      <h1 className='self-center font-extrabold font-neo-bold text-lg sm:mb-8 lg:text-5xl sm:text-3xl'>
        Combat sportif au sabre laser
      </h1>

      <p className='text-justify font-bold italic xs:text-sm'>
        Un véritable sport, avec ses règles et ses normes, dans lequel hommes et femmes peuvent s'affronter librement et
        en toute sécurité.
      </p>

      <p className='text-justify font-bold italic xs:text-sm'>
        Un système codifié de sept formes de combat, toutes complètes et efficaces par elles-mêmes tout en étant
        compatibles les unes avec les autres.
      </p>

      <p className='text-justify font-bold italic xs:text-sm'>
        Une langue commune permettant à tous de s'engager dans des duels et des tournois.
      </p>

      <p className='text-justify font-bold italic xs:text-sm'>
        Sabres longs, doubles dagues, baton doubles lames, choisissez votre arme !
      </p>

      <p className='self-center font-bold text-xl italic sm:mt-8'>... Et par-dessus tout, au sabre laser !</p>
    </div>
  );
}

export default Home;
