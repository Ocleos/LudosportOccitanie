import EventCard from './eventCard.component';

function Events() {
  return (
    <div>
      <span className='text-primary text-center font-bold block uppercase text-xl mb-4'>Événements</span>

      <p className='mb-4 text-center'>
        Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
      </p>

      <EventCard
        startDate='20/04/2024'
        endDate='21/04/2024'
        description="Festival Mang'Animes - Nîmes (Parc des expositions)"
      />
      <EventCard startDate='25/05/2024' endDate='26/05/2024' description='Toulouse Space Festival - Toulouse (MEETT)' />
      <EventCard
        startDate='06/07/2024'
        endDate='13/07/2024'
        description='Formation Instructeurs Forme 1 - Lunel (Salle Marcou)'
      />
    </div>
  );
}

export default Events;
