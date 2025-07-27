import { MailIcon, PhoneIcon } from 'lucide-react';

const Contacts = () => {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>Contacts</span>

      <div className='m-auto flex w-full flex-row justify-center gap-8 p-4'>
        <a href='mailto:montpellier@ludosport.net' rel='noreferrer' target='_blank'>
          <span className='flex flex-row gap-4'>
            <MailIcon className='h-12 w-12' />
            <p className='my-auto font-bold'>Montpellier</p>
          </span>
        </a>

        <a href='mailto:nimes@ludosport.net' rel='noreferrer' target='_blank'>
          <span className='flex flex-row gap-4'>
            <MailIcon className='h-12 w-12' />
            <p className='my-auto font-bold'>Nîmes</p>
          </span>
        </a>
      </div>

      <span className='flex flex-row justify-center gap-4'>
        <PhoneIcon className='h-12 w-12' />
        <p className='my-auto font-bold'>06 50 79 33 97</p>
      </span>
    </div>
  );
};

export default Contacts;
