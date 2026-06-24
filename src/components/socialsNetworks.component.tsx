import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';

const SocialsNetworks = () => {
  return (
    <section aria-labelledby='socials-title'>
      <h2 className='mb-4 block text-center font-bold text-primary text-xl uppercase' id='socials-title'>
        Réseaux Sociaux
      </h2>

      <p className='mb-4 text-center'>
        N'hésitez pas à nous suivre sur nos réseaux sociaux pour être au courant de l'actualité du club
      </p>

      <div className='m-auto flex w-full flex-row justify-center gap-8 p-4'>
        <a
          aria-label='Visiter la page Facebook de Ludosport Occitanie'
          href='https://www.facebook.com/ludosportoccitanie/'
          rel='noreferrer'
          target='_blank'>
          <img alt='' className='h-12 w-12' src={Facebook} />
        </a>

        <a
          aria-label='Visiter la page Instagram de Ludosport Occitanie'
          href='https://www.instagram.com/ludosport.occitanie/'
          rel='noreferrer'
          target='_blank'>
          <img alt='' className='h-12 w-12' src={Instagram} />
        </a>
      </div>
    </section>
  );
};

export default SocialsNetworks;
