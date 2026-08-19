import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Title from './ui/title.component';

const Footer = () => {
  return (
    <footer className='mt-10 w-full border-white/10 border-t py-8'>
      <div className='flex flex-col gap-4'>
        <Title id='footer-socials-title' text='Suivez-nous' />

        <div className='flex flex-row justify-center gap-4'>
          <a
            aria-label='Visiter la page Facebook de Ludosport Occitanie'
            href='https://www.facebook.com/ludosportoccitanie/'
            rel='noreferrer'
            target='_blank'>
            <img alt='' className='h-6 w-6' src={Facebook} />
          </a>

          <a
            aria-label='Visiter la page Instagram de Ludosport Occitanie'
            href='https://www.instagram.com/ludosport.occitanie/'
            rel='noreferrer'
            target='_blank'>
            <img alt='' className='h-6 w-6' src={Instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
