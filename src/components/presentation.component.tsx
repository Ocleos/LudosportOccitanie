import { PlayIcon } from 'lucide-react';
import { useState } from 'react';

const YOUTUBE_VIDEO_ID = 'EzOmiJ-AufY';

const Presentation = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section aria-labelledby='presentation-title'>
      <h2 className='mb-4 block text-center font-bold text-primary text-xl uppercase' id='presentation-title'>
        Présentation
      </h2>

      {isVideoLoaded ? (
        <iframe
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'
          allowFullScreen
          className='aspect-video-short w-full md:aspect-video'
          loading='lazy'
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
          title='Présentation de Ludosport Occitanie'
        />
      ) : (
        <button
          aria-label='Charger et lancer la vidéo de présentation YouTube'
          className='group relative aspect-video-short w-full overflow-hidden rounded-lg bg-slate-900 md:aspect-video'
          onClick={() => setIsVideoLoaded(true)}
          type='button'>
          <img
            alt=''
            className='h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100'
            loading='lazy'
            src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
          />
          <span className='absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 transition-colors group-hover:bg-black/50'>
            <span className='flex size-16 items-center justify-center rounded-full bg-primary transition-colors group-hover:bg-primary-dark'>
              <PlayIcon className='ml-1 size-8 fill-slate-950 text-slate-950' />
            </span>
            <span className='max-w-xs px-4 text-center text-sm text-white'>
              Cliquez pour charger la vidéo YouTube (dépôt de cookies Google à l'activation)
            </span>
          </span>
        </button>
      )}
    </section>
  );
};

export default Presentation;
