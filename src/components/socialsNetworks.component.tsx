import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Card from './ui/card.component';
import LabelLinkIcon from './ui/labelLinkIcon.component';
import Title from './ui/title.component';

const SocialsNetworks = () => {
  return (
    <section aria-labelledby='socials-title'>
      <div className='flex flex-col gap-8'>
        <Title id='socials-title' text='Réseaux Sociaux' />

        <p>N'hésitez pas à nous suivre sur nos réseaux sociaux pour être au courant de l'actualité du club</p>

        <Card className='mx-auto'>
          <LabelLinkIcon
            ariaLabel='Visiter la page Facebook de Ludosport Occitanie'
            icon={Facebook}
            label='Facebook'
            link='https://www.facebook.com/ludosportoccitanie/'
          />

          <LabelLinkIcon
            ariaLabel='Visiter la page Instagram de Ludosport Occitanie'
            icon={Instagram}
            label='Instagram'
            link='https://www.instagram.com/ludosport.occitanie/'
          />
        </Card>
      </div>
    </section>
  );
};

export default SocialsNetworks;
