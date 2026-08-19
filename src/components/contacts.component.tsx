import { MailIcon, PhoneIcon } from 'lucide-react';
import Card from './ui/card.component';
import LabelLinkIcon from './ui/labelLinkIcon.component';
import Title from './ui/title.component';

const Contacts = () => {
  return (
    <section aria-labelledby='contacts-title'>
      <div className='flex flex-col gap-8'>
        <Title id='contacts-title' level='h1' text='Contacts' />

        <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
          <Card>
            <p className='font-bold text-xl'>Montpellier</p>

            <LabelLinkIcon
              ariaLabel='Envoyer un email à Montpellier'
              icon={MailIcon}
              label='montpellier@ludosport.net'
              link='mailto:montpellier@ludosport.net'
            />
          </Card>

          <Card>
            <p className='font-bold text-xl'>Nîmes</p>

            <LabelLinkIcon
              ariaLabel='Envoyer un email à Nîmes'
              icon={MailIcon}
              label='nimes@ludosport.net'
              link='mailto:nimes@ludosport.net'
            />
          </Card>

          <Card>
            <p className='font-bold text-xl'>Téléphone</p>

            <LabelLinkIcon
              ariaLabel='Appeler au 06 50 79 33 97'
              icon={PhoneIcon}
              label='06 50 79 33 97'
              link='tel:+33650793397'
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
