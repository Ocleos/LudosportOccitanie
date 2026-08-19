import { EVENTS } from 'src/data/events';
import Title from '../ui/title.component';
import EventCard from './eventCard.component';

const Events = () => {
  return (
    <section aria-labelledby='events-title'>
      <div className='flex flex-col gap-8'>
        <Title id='events-title' level='h1' text='Événements' />

        <p className='text-center'>
          Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
        </p>

        {EVENTS.map((event) => (
          <EventCard key={`${event.title}-${event.startDate}`} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
