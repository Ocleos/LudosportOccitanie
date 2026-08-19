import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router';
import Footer from '../components/footer.component';
import Navbar from '../components/navigation/navbar.component';
import { buildPageHead } from '../utils/seo.utils';

export const Route = createRootRoute({
  component: RootLayout,
  head: () =>
    buildPageHead({
      description:
        "Ludosport Occitanie propose des cours de combat sportif au sabre laser, des séances d'entraînement et des cours d'essai en Occitanie.",
      title: 'Ludosport Occitanie - Combat sportif au sabre laser',
    }),
});

function RootLayout() {
  return (
    <>
      <HeadContent />

      <a className='skip-link' href='#main-content'>
        Aller au contenu principal
      </a>

      <Navbar />

      <main
        className='flex min-h-screen w-full flex-col items-center bg-[url("./assets/bgWallpaper-mobile.webp")] bg-center bg-cover bg-slate-900 bg-fixed pt-20 font-neo text-white md:bg-[url("./assets/bgWallpaper.webp")]'
        id='main-content'>
        <div className='m-4 flex max-w-7xl flex-1 flex-col gap-10'>
          <Outlet />
        </div>

        <Footer />
      </main>
    </>
  );
}
