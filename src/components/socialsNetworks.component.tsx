import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

function SocialsNetworks() {
  return (
    <div>
      <span className='text-primary text-center font-bold block uppercase text-xl mb-4'>Réseaux Sociaux</span>

      <p className='mb-4 text-center'>
        N'hésitez pas à nous suivre sur nos réseaux sociaux pour être au courant de l'actualité du club
      </p>

      <div className='flex flex-row gap-8 m-auto w-full p-4 justify-center'>
        <a href='https://www.facebook.com/ludosportoccitanie/' target='_blank' rel='noreferrer'>
          <FaFacebookF className='w-12 h-12' />
        </a>

        <a href='https://www.instagram.com/ludosport.occitanie/' target='_blank' rel='noreferrer'>
          <FaInstagram className='w-12 h-12' />
        </a>
      </div>
    </div>
  );
}

export default SocialsNetworks;
