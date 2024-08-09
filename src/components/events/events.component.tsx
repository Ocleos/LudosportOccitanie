import EventCard from './eventCard.component';

function Events() {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>Événements</span>

      <p className='mb-4 text-center'>
        Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
      </p>

      <EventCard startDate='10/08/2024' description='Initiation Ludosport - Nîmes (Salle Oh My Dance)' />

      <EventCard startDate='08/09/204' description='Antigone des Associations - Montpellier' />

      <EventCard startDate='09/09/2024' endDate='13/09/2024' description='Reprise des cours' />

      <EventCard startDate='14/09/2024' endDate='15/09/2024' description='VitalSport Décathlon - Nîmes' />
    </div>
  );
}

export default Events;
