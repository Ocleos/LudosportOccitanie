import { Link } from '@tanstack/react-router';
import { SwordsIcon } from 'lucide-react';
import Card from './card.component';

const TrialCourseCta = () => {
  return (
    <Card className='w-full items-center gap-4 text-center'>
      <SwordsIcon aria-hidden='true' className='h-10 w-10 text-primary' />

      <p className='font-bold text-xl'>
        Convaincu ? Venez nous rencontrer et découvrir Ludosport lors d'un cours d'essai !
      </p>

      <Link
        className='rounded bg-primary px-6 py-3 font-neo-bold text-slate-950 transition-colors hover:bg-primary-dark'
        to='/cours-essai'>
        Réserver mon cours d'essai
      </Link>
    </Card>
  );
};

export default TrialCourseCta;
