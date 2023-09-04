import EventCard from './eventCard.component';

function Events() {
  return (
    <div>
      <span className='text-primary text-center font-bold block uppercase text-xl mb-4'>Événements</span>

      <p className='mb-4 text-center'>
        Vous souhaitez nous rencontrer et discuter avec nous, n'hésitez pas à venir aux prochains événements :
      </p>

      <EventCard startDate='10/09/2023' description='Antigone des Associations à Montpellier' />
      <EventCard fromDate='11/09/2023' description='Reprise des cours sur Nîmes' />
      <EventCard fromDate='12/09/2023' description='Reprise des cours sur Montpellier' />
      <EventCard startDate='16/09/2023' endDate='17/03/2023' description='VitalSport Decathlon Nîmes' />
      <EventCard startDate='02/12/2023' endDate='03/12/2023' description="Champions' Arena - Paris 2023" />
    </div>
  );
}

export default Events;
