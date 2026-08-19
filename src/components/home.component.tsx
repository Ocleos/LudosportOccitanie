import LudosportOccitanieLogo from '../assets/LudoSportOccitanie.svg';
import TrialCourseCta from './ui/trialCourseCta.component';
import YoutubeVideo from './ui/youtubeVideo.component';

const Home = () => {
  return (
    <>
      <section aria-labelledby='home-title' className='flex min-h-screen w-full flex-col justify-center gap-8'>
        <img alt='Logo de Ludosport Occitanie' className='w-48 self-center' src={LudosportOccitanieLogo} />
        <h1 className='self-center font-extrabold font-neo-bold text-lg sm:text-3xl lg:text-5xl' id='home-title'>
          Combat sportif au sabre laser
        </h1>

        <p className='text-justify'>
          Un véritable sport, avec ses règles et ses normes, dans lequel hommes et femmes peuvent s'affronter librement
          et en toute sécurité.
        </p>

        <p className='text-justify'>
          Un système codifié de sept formes de combat, toutes complètes et efficaces par elles-mêmes tout en étant
          compatibles les unes avec les autres.
        </p>

        <p className='text-justify'>
          Une langue commune permettant à tous de s'engager dans des duels et des tournois.
        </p>

        <p className='text-justify'>Sabres longs, doubles dagues, baton doubles lames, choisissez votre arme !</p>

        <p className='self-center font-bold text-xl italic'>... Et par-dessus tout, au sabre laser !</p>
      </section>

      <YoutubeVideo isShort title='Présentation de Ludosport Occitanie' youtubeVideoId={'EzOmiJ-AufY'} />

      <TrialCourseCta />
    </>
  );
};

export default Home;
