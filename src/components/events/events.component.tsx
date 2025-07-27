import EventCard from './eventCard.component';

const Events = () => {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>Événements</span>

      <p className='mb-4 text-center'>
        Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
      </p>

      <EventCard description='Forum des associations - Nîmes' startDate='06/09/2025' />

      <EventCard description='Antigone des Associations - Montpellier' startDate='07/09/2025' />

      <EventCard description='Reprise des cours' endDate='12/09/2025' startDate='08/09/2025' />

      <EventCard description='VitalSport Décathlon - Nîmes' endDate='14/09/2025' startDate='13/09/2025' />
    </div>
  );
};

export default Events;
