import { Link } from '@tanstack/react-router';
import { MenuIcon } from 'lucide-react';
import { useId, useRef, useState } from 'react';
import LudosportOccitanieLogo from '../../assets/LudoSportOccitanie.svg';
import MobileMenu from './mobileMenu.component';
import { NAV_LINKS } from './navLinks';

const navLinkClassName = 'font-neo-bold underline-offset-4 transition-colors hover:text-primary-light hover:underline';
const ctaClassName =
  'whitespace-nowrap rounded bg-primary px-3 py-2 font-neo-bold text-slate-950 text-sm transition-colors hover:bg-primary-dark sm:px-4 sm:text-base';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <header className='fixed inset-x-0 top-0 z-40 flex h-20 w-full items-center justify-between gap-4 bg-slate-950/95 px-4 xs:px-6 shadow-lg backdrop-blur'>
        <Link className='flex items-center gap-3' to='/'>
          <img alt='Logo de Ludosport Occitanie' className='h-12 w-12' src={LudosportOccitanieLogo} />
          <span className='flex flex-col font-neo-bold text-xs xs:text-sm uppercase leading-tight sm:text-base'>
            <span className='text-white'>Ludosport</span>
            <span className='text-primary'>Occitanie</span>
          </span>
        </Link>

        <nav aria-label='Navigation principale' className='hidden items-center gap-4 md:flex lg:gap-6'>
          {NAV_LINKS.map((link) => (
            <Link
              activeOptions={link.to === '/' ? { exact: true } : undefined}
              activeProps={{ 'aria-current': 'page', className: 'text-primary' }}
              className={navLinkClassName}
              inactiveProps={{ className: 'text-white' }}
              key={link.to}
              to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <Link className={ctaClassName} to='/cours-essai'>
            Cours d'essai
          </Link>

          <button
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            aria-label='Ouvrir le menu de navigation'
            className='text-white md:hidden'
            onClick={() => setIsMenuOpen(true)}
            ref={menuButtonRef}
            type='button'>
            <MenuIcon aria-hidden='true' className='size-8' />
          </button>
        </div>
      </header>

      {/* Rendered as a header sibling, not a child: the header's backdrop-blur (backdrop-filter)
          establishes a containing block for fixed-position descendants, which would otherwise
          shrink this overlay's `fixed inset-0` down to the header's own box instead of the viewport. */}
      <MobileMenu id={menuId} isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
