import { Calendar } from 'lucide-react';
import { useMemo } from 'react';

interface IEventCardProps {
  startDate?: string;
  endDate?: string;
  fromDate?: string;
  description: string;
}
const EventCard: React.FC<IEventCardProps> = ({ startDate, endDate, fromDate, description }) => {
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
    <div className='border-2 rounded-lg p-4 mb-4 max-w-xl mx-auto flex flex-row gap-4'>
      <Calendar className='flex-none w-8 h-8 m-auto' />
      <div className='flex-1 flex-col'>
        <p className='font-bold text-md'>{getFullDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
