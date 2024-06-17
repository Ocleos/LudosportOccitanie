import EventCard from './eventCard.component';

function Events() {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>Événements</span>

      <p className='mb-4 text-center'>
        Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
      </p>

      <EventCard
        startDate='06/07/2024'
        endDate='13/07/2024'
        description='Formation Instructeurs Forme 1 - Lunel (Salle Marcou)'
      />
      <EventCard
        startDate='15/07/2024'
        endDate='21/07/2024'
        description='Formation Instructeurs Forme 2 - Lunel (Salle Marcou)'
      />
      <EventCard startDate='10/08/2024' description='Initiation Ludosport - Nîmes (Salle Oh My Dance)' />
    </div>
  );
}

export default Events;
