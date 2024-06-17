import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';

function SocialsNetworks() {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>Réseaux Sociaux</span>

      <p className='mb-4 text-center'>
        N'hésitez pas à nous suivre sur nos réseaux sociaux pour être au courant de l'actualité du club
      </p>

      <div className='m-auto flex w-full flex-row justify-center gap-8 p-4'>
        <a href='https://www.facebook.com/ludosportoccitanie/' target='_blank' rel='noreferrer'>
          <img src={Facebook} alt='Facebook' className='h-12 w-12' />
        </a>

        <a href='https://www.instagram.com/ludosport.occitanie/' target='_blank' rel='noreferrer'>
          <img src={Instagram} alt='Instagram' className='h-12 w-12' />
        </a>
      </div>
    </div>
  );
}

export default SocialsNetworks;
