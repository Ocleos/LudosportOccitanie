import LudosportOccitanieLogo from '../assets/LudoSportOccitanie.svg';

function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col gap-6 xs:gap-4 justify-center'>
      <img src={LudosportOccitanieLogo} alt='Ludosport Occitanie' className='w-48 self-center' />
      <h1 className='text-lg sm:text-3xl lg:text-5xl font-extrabold self-center sm:mb-8 font-neo-bold'>
        Combat sportif au sabre laser
      </h1>

      <p className='font-bold italic text-justify xs:text-sm'>
        Un véritable sport, avec ses règles et ses normes, dans lequel hommes et femmes peuvent s'affronter librement et
        en toute sécurité.
      </p>

      <p className='font-bold italic text-justify xs:text-sm'>
        Un système codifié de sept formes de combat, toutes complètes et efficaces par elles-mêmes tout en étant
        compatibles les unes avec les autres.
      </p>

      <p className='font-bold italic text-justify xs:text-sm'>
        Une langue commune permettant à tous de s'engager dans des duels et des tournois.
      </p>

      <p className='font-bold italic text-justify xs:text-sm'>
        Sabres longs, doubles dagues, baton doubles lames, choisissez votre arme !
      </p>

      <p className='font-bold italic self-center text-xl sm:mt-8'>... Et par-dessus tout, au sabre laser !</p>
    </div>
  );
}

export default Home;
