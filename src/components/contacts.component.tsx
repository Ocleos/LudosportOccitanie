import { Mail, Phone } from 'lucide-react';

function Contacts() {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>Contacts</span>

      <div className='m-auto flex w-full flex-row justify-center gap-8 p-4'>
        <a href='mailto:montpellier@ludosport.net' target='_blank' rel='noreferrer'>
          <span className='flex flex-row gap-4'>
            <Mail className='h-12 w-12' />
            <p className='my-auto font-bold'>Montpellier</p>
          </span>
        </a>

        <a href='mailto:nimes@ludosport.net' target='_blank' rel='noreferrer'>
          <span className='flex flex-row gap-4'>
            <Mail className='h-12 w-12' />
            <p className='my-auto font-bold'>Nîmes</p>
          </span>
        </a>
      </div>

      <span className='flex flex-row justify-center gap-4'>
        <Phone className='h-12 w-12' />
        <p className='my-auto font-bold'>06 50 79 33 97</p>
      </span>
    </div>
  );
}

export default Contacts;
