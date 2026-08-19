import { Link } from '@tanstack/react-router';
import { XIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { NAV_LINKS } from './navLinks';

type MobileMenuProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ id, isOpen, onClose }: MobileMenuProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-label='Menu de navigation'
      aria-modal='true'
      className='fixed inset-0 z-50 flex flex-col gap-8 bg-slate-950 p-6 md:hidden'
      id={id}
      role='dialog'>
      <div className='flex justify-end'>
        <button
          aria-label='Fermer le menu de navigation'
          className='text-white'
          onClick={onClose}
          ref={closeButtonRef}
          type='button'>
          <XIcon aria-hidden='true' className='size-8' />
        </button>
      </div>

      <nav aria-label='Navigation principale' className='flex flex-col items-center gap-6'>
        {NAV_LINKS.map((link) => (
          <Link
            activeOptions={link.to === '/' ? { exact: true } : undefined}
            activeProps={{ 'aria-current': 'page', className: 'text-primary' }}
            className='font-neo-bold text-2xl underline-offset-4 transition-colors hover:text-primary-light hover:underline'
            inactiveProps={{ className: 'text-white' }}
            key={link.to}
            onClick={onClose}
            to={link.to}>
            {link.label}
          </Link>
        ))}

        <Link
          className='rounded bg-primary px-6 py-3 font-neo-bold text-lg text-slate-950 transition-colors hover:bg-primary-dark'
          onClick={onClose}
          to='/cours-essai'>
          Cours d'essai
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
