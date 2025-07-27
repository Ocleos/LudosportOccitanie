import Contacts from './components/contacts.component';
import Events from './components/events/events.component';
import Home from './components/home.component';
import Places from './components/places.component';
import SocialsNetworks from './components/socialsNetworks.component';
import TrialCourses from './components/trialCourses.component';

const App = () => {
  return (
    <main className='flex h-full w-full flex-col items-center bg-[url("./assets/bgWallpaper.png")] bg-center bg-cover bg-slate-900 bg-fixed'>
      <div className='m-4 flex max-w-5xl flex-col gap-10 font-neo text-white'>
        <Home />

        <div>
          <iframe
            allowFullScreen
            className='aspect-video-short w-full md:aspect-video'
            src='https://www.youtube.com/embed/EzOmiJ-AufY'
            title='Ludosport Occitanie'
          />
        </div>

        <Places />
        <TrialCourses />
        <Events />
        <SocialsNetworks />
        <Contacts />
      </div>
    </main>
  );
};

export default App;
