import { MailIcon, PhoneIcon } from 'lucide-react';

const Contacts = () => {
  return (
    <section aria-labelledby='contacts-title'>
      <h2 className='mb-4 block text-center font-bold text-primary text-xl uppercase' id='contacts-title'>
        Contacts
      </h2>

      <div className='m-auto flex w-full flex-row justify-center gap-8 p-4'>
        <a
          aria-label='Envoyer un email à Montpellier'
          href='mailto:montpellier@ludosport.net'
          rel='noreferrer'
          target='_blank'>
          <span className='flex flex-row gap-4'>
            <MailIcon aria-hidden='true' className='h-12 w-12' />
            <p className='my-auto font-bold'>Montpellier</p>
          </span>
        </a>

        <a aria-label='Envoyer un email à Nîmes' href='mailto:nimes@ludosport.net' rel='noreferrer' target='_blank'>
          <span className='flex flex-row gap-4'>
            <MailIcon aria-hidden='true' className='h-12 w-12' />
            <p className='my-auto font-bold'>Nîmes</p>
          </span>
        </a>
      </div>

      <div className='flex flex-row justify-center gap-4'>
        <PhoneIcon aria-hidden='true' className='h-12 w-12' />
        <p className='my-auto font-bold'>06 50 79 33 97</p>
      </div>
    </section>
  );
};

export default Contacts;
