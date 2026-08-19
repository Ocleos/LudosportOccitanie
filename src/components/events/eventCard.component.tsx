import { CalendarIcon, ClockIcon, LinkIcon, MapPinIcon } from 'lucide-react';
import { useMemo } from 'react';
import type { EventItem } from 'src/data/events';
import { FORMAT_FULL_DATE, formatDate } from 'src/utils/format.utils';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';
import LabelLinkIcon from '../ui/labelLinkIcon.component';

const EventCard: React.FC<EventItem> = (props) => {
  const { title, location, startDate, endDate, fromDate, time, link } = props;

  const getFullDate = useMemo(() => {
    let fullDate = '';

    if (fromDate) {
      fullDate = `À partir du ${formatDate(fromDate, FORMAT_FULL_DATE)}`;
    } else if (endDate && startDate) {
      fullDate = `Du ${formatDate(startDate, FORMAT_FULL_DATE)} au ${formatDate(endDate, FORMAT_FULL_DATE)}`;
    } else {
      fullDate = `Le ${formatDate(startDate, FORMAT_FULL_DATE)}`;
    }

    return fullDate;
  }, [startDate, endDate, fromDate]);

  return (
    <Card>
      <p className='font-bold text-xl'>{title}</p>

      <LabelIcon icon={CalendarIcon} label={getFullDate} />

      {time && <LabelIcon icon={ClockIcon} label={time} />}

      <LabelIcon icon={MapPinIcon} label={location} />

      {link && <LabelLinkIcon ariaLabel={`Plus d'info à propos de ${title}`} icon={LinkIcon} link={link} />}
    </Card>
  );
};

export default EventCard;
