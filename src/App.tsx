import Contacts from './components/contacts.component';
import Events from './components/events/events.component';
import Home from './components/home.component';
import Places from './components/places.component';
import SocialsNetworks from './components/socialsNetworks.component';
import TrialCourses from './components/trialCourses.component';

function App() {
  return (
    <main className='flex h-full w-full flex-col bg-[url("./assets/bgWallpaper.png")] bg-center bg-cover bg-slate-900 bg-fixed'>
      <div className='m-4 flex max-w-5xl flex-col gap-8 font-neo text-white xl:mx-auto'>
        <Home />

        <div>
          <iframe
            className='aspect-video w-full'
            src='https://www.youtube.com/embed/1X1vQloCddU'
            title='Ludosport Occitanie'
            allowFullScreen
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
}

export default App;
