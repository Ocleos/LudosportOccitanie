import { CalendarIcon } from 'lucide-react';
import { useMemo } from 'react';

type EventCardProps = {
  startDate?: string;
  endDate?: string;
  fromDate?: string;
  description: string;
};

const EventCard: React.FC<EventCardProps> = ({ startDate, endDate, fromDate, description }) => {
  const getFullDate = useMemo(() => {
    let fullDate = '';

    if (fromDate) {
      fullDate = `À partir du ${fromDate}`;
    } else if (endDate && startDate) {
      fullDate = `Du ${startDate} au ${endDate}`;
    } else {
      fullDate = `Le ${startDate}`;
    }

    return fullDate;
  }, [startDate, endDate, fromDate]);

  return (
    <div className='mx-auto mb-4 flex max-w-xl flex-row gap-4 rounded-lg border-2 p-4'>
      <CalendarIcon className='m-auto h-8 w-8 flex-none' />
      <div className='flex-1 flex-col'>
        <p className='font-bold text-md'>{getFullDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
