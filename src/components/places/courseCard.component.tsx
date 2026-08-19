import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon, UsersIcon } from 'lucide-react';
import type { Course } from 'src/data/courses';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';

const CourseCard: React.FC<Course> = (props) => {
  const { title, day, startTime, endTime, instructor, assistant, place } = props;

  return (
    <Card className='relative overflow-hidden'>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute top-4 right-4 h-40 w-24 bg-white opacity-20'
        style={{
          maskImage: `url(${place.logo})`,
          maskPosition: 'top right',
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskImage: `url(${place.logo})`,
          WebkitMaskPosition: 'top right',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
        }}
      />

      <div className='relative flex flex-col gap-4'>
        <p className='font-bold text-xl'>{title}</p>

        <LabelIcon icon={CalendarIcon} label={day} />

        <LabelIcon icon={ClockIcon} label={`${startTime} - ${endTime}`} />

        <LabelIcon icon={UserIcon} label={instructor} />

        {assistant && <LabelIcon icon={UsersIcon} label={assistant} />}

        <p className='flex items-center gap-2'>
          <MapPinIcon className='h-6 w-6 text-primary' />
          <a
            aria-label={`Aller au lieu - ${place.name}`}
            className='underline-offset-4 hover:underline'
            href={`#${place.id}`}>
            {place.name}
          </a>
        </p>
      </div>
    </Card>
  );
};

export default CourseCard;
