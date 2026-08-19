import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useEffect, useRef } from 'react';

type LightboxProps = {
  alt: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  src: string;
};

const Lightbox = ({ alt, onClose, onNext, onPrevious, src }: LightboxProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [onClose, onNext, onPrevious]);

  // Closing on backdrop click should ignore clicks that bubble up from the image or the nav buttons —
  // only a click landing on the backdrop itself (not a descendant) should dismiss the lightbox.
  const closeOnBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Escape is handled globally above; this only closes on backdrop click.
    <div
      aria-label='Photo agrandie'
      aria-modal='true'
      className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4'
      onClick={closeOnBackdropClick}
      role='dialog'>
      <button
        aria-label='Fermer la photo agrandie'
        className='absolute top-4 right-4 text-white transition-colors hover:text-primary-light'
        onClick={onClose}
        ref={closeButtonRef}
        type='button'>
        <XIcon aria-hidden='true' className='size-6' />
      </button>

      <button
        aria-label='Photo précédente'
        className='absolute left-4 rounded-full bg-slate-950/70 p-2 text-white transition-colors hover:text-primary-light'
        onClick={onPrevious}
        type='button'>
        <ChevronLeftIcon aria-hidden='true' className='size-6' />
      </button>

      <img alt={alt} className='max-h-full max-w-full rounded-lg object-contain' src={src} />

      <button
        aria-label='Photo suivante'
        className='absolute right-4 rounded-full bg-slate-950/70 p-2 text-white transition-colors hover:text-primary-light'
        onClick={onNext}
        type='button'>
        <ChevronRightIcon aria-hidden='true' className='size-6' />
      </button>
    </div>
  );
};

export default Lightbox;
