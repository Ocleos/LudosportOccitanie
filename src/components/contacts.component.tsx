import { Mail, Phone } from 'lucide-react';

function Contacts() {
  return (
    <div>
      <span className='text-primary text-center font-bold block uppercase text-xl mb-4'>Contacts</span>

      <div className='flex flex-row gap-8 m-auto w-full p-4 justify-center'>
        <a href='mailto:montpellier@ludosport.net' target='_blank' rel='noreferrer'>
          <span className='flex flex-row gap-4'>
            <Mail className='w-12 h-12' />
            <p className='my-auto font-bold'>Montpellier</p>
          </span>
        </a>

        <a href='mailto:nimes@ludosport.net' target='_blank' rel='noreferrer'>
          <span className='flex flex-row gap-4'>
            <Mail className='w-12 h-12' />
            <p className='my-auto font-bold'>Nîmes</p>
          </span>
        </a>
      </div>

      <span className='flex flex-row gap-4 justify-center'>
        <Phone className='w-12 h-12' />
        <p className='my-auto font-bold'>06 50 79 33 97</p>
      </span>
    </div>
  );
}

export default Contacts;
