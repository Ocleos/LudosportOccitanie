import EventCard from './eventCard.component';

const Events = () => {
  return (
    <section aria-labelledby='events-title'>
      <h2 className='mb-4 block text-center font-bold text-primary text-xl uppercase' id='events-title'>
        Événements
      </h2>

      <p className='mb-4 text-center'>
        Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
      </p>

      <EventCard description='VitalSport Décathlon - Nîmes' endDate='30/08/2026' startDate='29/08/2026' />
      <EventCard description='Antigone des Associations - Montpellier' startDate='06/09/2026' />

      <EventCard description='Reprise des cours' endDate='11/09/2026' startDate='07/09/2026' />

      <EventCard description='VitalSport Décathlon - Montpellier' endDate='13/09/2026' startDate='12/09/2026' />
    </section>
  );
};

export default Events;
