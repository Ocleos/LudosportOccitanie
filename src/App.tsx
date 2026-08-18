import Contacts from './components/contacts.component';
import Events from './components/events/events.component';
import Home from './components/home.component';
import Places from './components/places.component';
import Presentation from './components/presentation.component';
import SocialsNetworks from './components/socialsNetworks.component';
import TrialCourses from './components/trialCourses.component';

const App = () => {
  return (
    <>
      <a className='skip-link' href='#main-content'>
        Aller au contenu principal
      </a>
      <main
        className='flex h-full w-full flex-col items-center bg-[url("./assets/bgWallpaper-mobile.webp")] bg-center bg-cover bg-slate-900 bg-fixed md:bg-[url("./assets/bgWallpaper.webp")]'
        id='main-content'>
        <div className='m-4 flex max-w-5xl flex-col gap-10 font-neo text-white'>
          <Home />
          <Presentation />
          <Places />
          <TrialCourses />
          <Events />
          <SocialsNetworks />
          <Contacts />
        </div>
      </main>
    </>
  );
};

export default App;
