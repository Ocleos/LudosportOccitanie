import EventCard from './eventCard.component';

function Events() {
  return (
    <div>
      <span className='text-primary text-center font-bold block uppercase text-xl mb-4'>Événements</span>

      <p className='mb-4 text-center'>
        Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
      </p>

      <EventCard startDate='01/10/2023' description='Stage découverte - Lunel (Salle Marcou)' />
      <EventCard startDate='15/10/2023' description='Stage Forme 3 Baton - Montpellier' />
      <EventCard startDate='28/10/2023' description='Stage Forme 1 Spécialisée - Lunel (Halle Intercommunale)' />
      <EventCard startDate='29/10/2023' description='Halloween Games - Lunel (Halle Intercommunale)' />
      <EventCard startDate='02/12/2023' endDate='03/12/2023' description="Champions' Arena - Paris 2023" />
    </div>
  );
}

export default Events;
