import { ChevronLeftIcon, ChevronRightIcon, Maximize2Icon } from 'lucide-react';
import { useState } from 'react';
import image01 from '../../assets/photos/image01.webp';
import image01Thumb from '../../assets/photos/image01-thumb.webp';
import image02 from '../../assets/photos/image02.webp';
import image02Thumb from '../../assets/photos/image02-thumb.webp';
import image03 from '../../assets/photos/image03.webp';
import image03Thumb from '../../assets/photos/image03-thumb.webp';
import image04 from '../../assets/photos/image04.webp';
import image04Thumb from '../../assets/photos/image04-thumb.webp';
import image05 from '../../assets/photos/image05.webp';
import image05Thumb from '../../assets/photos/image05-thumb.webp';
import image06 from '../../assets/photos/image06.webp';
import image06Thumb from '../../assets/photos/image06-thumb.webp';
import image07 from '../../assets/photos/image07.webp';
import image07Thumb from '../../assets/photos/image07-thumb.webp';
import image08 from '../../assets/photos/image08.webp';
import image08Thumb from '../../assets/photos/image08-thumb.webp';
import image09 from '../../assets/photos/image09.webp';
import image09Thumb from '../../assets/photos/image09-thumb.webp';
import image10 from '../../assets/photos/image10.webp';
import image10Thumb from '../../assets/photos/image10-thumb.webp';
import Card from '../ui/card.component';
import Title from '../ui/title.component';
import Lightbox from './lightbox.component';

// Thumbnails (max 800px, ~20-45KB each) feed the carousel via srcset; the full-size versions (max 2000px,
// ~55-295KB each) only load once a photo is opened in the lightbox. Both are pre-optimized webp
const PHOTOS = [
  { alt: 'Duel de nuit entre deux combattants au sabre laser devant un bâtiment', full: image01, thumb: image01Thumb },
  {
    alt: "Célébration collective : les athlètes croisent leurs sabres au centre d'un tournoi international",
    full: image02,
    thumb: image02Thumb,
  },
  {
    alt: 'Duel en salle entre deux combattants aux sabres rouges',
    full: image03,
    thumb: image03Thumb,
  },
  {
    alt: 'Combat rapproché entre deux athlètes aux batons',
    full: image04,
    thumb: image04Thumb,
  },
  {
    alt: 'Combattante en garde, sabres rose et jaune croisés, la nuit en extérieur',
    full: image05,
    thumb: image05Thumb,
  },
  {
    alt: "Combattant s'entraînant en extérieur de nuit avec des sabres lasers",
    full: image06,
    thumb: image06Thumb,
  },
  {
    alt: 'Duel en salle entre deux combattants aux batons vert et violet',
    full: image07,
    thumb: image07Thumb,
  },
  {
    alt: 'Duel en salle, sabres blanc et rose croisés entre deux athlètes',
    full: image08,
    thumb: image08Thumb,
  },
  {
    alt: 'Combattant en tenue verte, doubles dagues roses en action',
    full: image09,
    thumb: image09Thumb,
  },
  {
    alt: 'Portrait d’un combattant en tenue noire tenant un sabre blanc',
    full: image10,
    thumb: image10Thumb,
  },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const showPrevious = () => setIndex((current) => (current - 1 + PHOTOS.length) % PHOTOS.length);
  const showNext = () => setIndex((current) => (current + 1) % PHOTOS.length);

  const currentPhoto = PHOTOS[index];

  return (
    <>
      <Title id='gallery-title' text='Galerie' />

      <Card className='w-full'>
        <div className='relative'>
          <button
            aria-label='Agrandir la photo'
            className='group block h-72 w-full overflow-hidden rounded-lg sm:h-96 md:h-112'
            onClick={() => setIsLightboxOpen(true)}
            type='button'>
            {/* object-contain (not cover) so portrait photos display in full instead of being cropped
                to a fixed landscape aspect ratio — the fixed-height container letterboxes them instead. */}
            <img
              alt={currentPhoto.alt}
              className='h-full w-full object-contain transition-transform group-hover:scale-105'
              loading='lazy'
              sizes='(min-width: 768px) 700px, 100vw'
              src={currentPhoto.thumb}
              srcSet={`${currentPhoto.thumb} 800w, ${currentPhoto.full} 2000w`}
            />

            <span className='absolute right-2 bottom-2 rounded-full bg-slate-950/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100'>
              <Maximize2Icon aria-hidden='true' className='size-6 hover:text-primary-light' />
            </span>
          </button>

          <button
            aria-label='Photo précédente'
            className='absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white transition-colors hover:bg-slate-950/90 hover:text-primary-light'
            onClick={showPrevious}
            type='button'>
            <ChevronLeftIcon aria-hidden='true' className='size-6' />
          </button>

          <button
            aria-label='Photo suivante'
            className='absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white transition-colors hover:bg-slate-950/90 hover:text-primary-light'
            onClick={showNext}
            type='button'>
            <ChevronRightIcon aria-hidden='true' className='size-6' />
          </button>
        </div>

        <div aria-label='Choisir une photo' className='flex justify-center gap-2' role='group'>
          {PHOTOS.map((photo, photoIndex) => (
            <button
              aria-current={photoIndex === index ? 'true' : undefined}
              aria-label={`Photo ${photoIndex + 1} sur ${PHOTOS.length}`}
              className={`size-2.5 rounded-full transition-colors ${
                photoIndex === index ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
              }`}
              key={photo.full}
              onClick={() => setIndex(photoIndex)}
              type='button'
            />
          ))}
        </div>

        <p className='text-center text-sm'>Crédits photos by Florakhus</p>
      </Card>

      {isLightboxOpen && (
        <Lightbox
          alt={currentPhoto.alt}
          onClose={() => setIsLightboxOpen(false)}
          onNext={showNext}
          onPrevious={showPrevious}
          src={currentPhoto.full}
        />
      )}
    </>
  );
};

export default Gallery;
