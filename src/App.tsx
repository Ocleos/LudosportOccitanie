import Events from './components/events/events.component';
import Home from './components/home.component';
import Places from './components/places.component';
import SocialsNetworks from './components/socialsNetworks.component';

function App() {
  return (
    <main className="w-full h-full flex flex-col bg-slate-900 bg-[url('./assets/bgWallpaper.png')] bg-fixed bg-cover bg-center">
      <div className='max-w-5xl flex flex-col gap-8 text-white m-4 xl:mx-auto font-neo'>
        <Home />

        <div>
          <iframe
            className='w-full aspect-video'
            src='https://www.youtube.com/embed/1X1vQloCddU'
            title='Ludosport Occitanie'
            allowFullScreen
          />
        </div>

        <Places />
        <Events />
        <SocialsNetworks />
      </div>
    </main>
  );
}

export default App;

// - Cours d'essais
