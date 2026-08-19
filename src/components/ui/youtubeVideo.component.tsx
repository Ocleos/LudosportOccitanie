import { PlayIcon } from 'lucide-react';
import { useState } from 'react';

type YoutubeVideoProps = {
  youtubeVideoId: string;
  title: string;
  isShort?: boolean;
};

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ youtubeVideoId, title, isShort = false }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const aspectClassName = isShort ? 'aspect-video-short max-w-96' : 'aspect-video';

  return (
    <div className='flex flex-row items-center justify-center'>
      {isVideoLoaded ? (
        <iframe
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'
          allowFullScreen
          className={`${aspectClassName} w-full`}
          loading='lazy'
          src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1`}
          title={title}
        />
      ) : (
        <button
          aria-label={`Charger et lancer la vidéo YouTube : ${title}`}
          className={`group relative m-auto ${aspectClassName} w-full overflow-hidden rounded-lg bg-slate-900`}
          onClick={() => setIsVideoLoaded(true)}
          type='button'>
          <img
            alt=''
            className='h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100'
            loading='lazy'
            src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
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
    </div>
  );
};

export default YoutubeVideo;
