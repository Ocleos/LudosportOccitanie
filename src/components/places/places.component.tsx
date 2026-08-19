import { COURSES } from 'src/data/courses';
import { PLACES } from 'src/data/places';
import Title from '../ui/title.component';
import CourseCard from './courseCard.component';
import CourseInfo from './courseInfo.component';
import PlaceCard from './placeCard.component';

const montpellierCourses = COURSES.filter((course) => course.school === 'montpellier');
const nimesCourses = COURSES.filter((course) => course.school === 'nimes');
const trainingPlaces = [PLACES.montpellier, PLACES.nimes, PLACES.caissargues];

const Places = () => {
  return (
    <section aria-labelledby='places-title'>
      <div className='flex flex-col gap-8'>
        <Title id='courses-title' level='h1' text='Déroulement des cours' />

        <CourseInfo />

        <Title id='montpellier-title' text='Montpellier' />

        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
          {montpellierCourses.map((course) => (
            <CourseCard key={`${course.place.id}-${course.title}`} {...course} />
          ))}
        </div>

        <Title id='nimes-title' text='Nîmes' />

        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
          {nimesCourses.map((course) => (
            <CourseCard key={`${course.place.id}-${course.title}`} {...course} />
          ))}
        </div>

        <Title id='places-title' text="Lieux d'entraînements" />

        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
          {trainingPlaces.map((place) => (
            <PlaceCard key={place.id} {...place} title={place.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
