import {
  CircleFadingArrowUpIcon,
  ExternalLinkIcon,
  MapPinIcon,
  MessageCircleQuestionMarkIcon,
  Share2Icon,
} from 'lucide-react';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';
import Title from '../ui/title.component';
import TrialCourseCta from '../ui/trialCourseCta.component';
import Gallery from './gallery.component';
import PathInfo from './pathInfo.component';
import PrinciplesInfo from './principlesInfo.component';
import Videos from './videos.component';

const Presentation = () => {
  return (
    <section aria-labelledby='presentation-title'>
      <div className='flex flex-col items-center gap-8'>
        <Title id='presentation-title' level='h1' text='Présentation' />

        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={MessageCircleQuestionMarkIcon} label='Ludosport ?' />
          </p>

          <p>
            Le Ludosport est un sport de combat moderne qui utilise le sabre laser comme arme sportive. Ce n'est pas une
            simple chorégraphie ou un jeu de rôle, mais un véritable sport d'opposition avec ses propres techniques,
            règles et système de progression. <br />
            <br />
            Développé en Italie depuis 2006, le Ludosport combine des éléments d'escrime, d'arts martiaux et de tactique
            sportive pour créer une expérience de combat unique et complète.
          </p>
        </Card>

        <PrinciplesInfo />

        <Title id='benefits-title' text='Bénéfices' />

        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
          <Card>
            <p className='font-bold text-xl'>
              <LabelIcon icon={CircleFadingArrowUpIcon} label='Développement personnel' />
            </p>

            <ul className='list-disc pl-4'>
              <li>Amélioration de la condition physique</li>
              <li>Développement de la coordination</li>
              <li>Renforcement de la concentration</li>
              <li>Gestion du stress</li>
            </ul>
          </Card>

          <Card>
            <p className='font-bold text-xl'>
              <LabelIcon icon={Share2Icon} label='Aspect social' />
            </p>

            <ul className='list-disc pl-4'>
              <li>Communauté accueillante</li>
              <li>Esprit d'équipe</li>
              <li>Événements et tournois</li>
              <li>Réseau international</li>
            </ul>
          </Card>
        </div>

        <PathInfo />

        <Title id='competitive-title' text='Compétitions' />

        <Card className='w-full'>
          <p>
            Les athlètes Ludosport peuvent concourir dans quatre niveaux de compétition : Local ; Régional ; National ;
            International.
            <br />
            <br />
            Les tournois Locaux, dits “Tournois d’école” voient s’affronter les élèves d’une même ville.
            <br />
            <br />
            Les tournois Régionaux, dits “Tournois d’Académie” voient s’affronter les élèves d’une même académie,
            regroupant plusieurs écoles.
            <br />
            <br />
            Les tournois Nationaux voient s’affronter les athlètes de toutes les académies d’un pays, pour déterminer
            les champions du pays, et les participants au tournoi international.
            <br />
            <br />
            Le tournoi international, dit “Champion’s Arena” voit s’affronter les 64 meilleurs athlètes du monde pour
            nommer les Champions du Monde.
          </p>
        </Card>

        <Title id='lso-title' text='Ludosport Occitanie' />

        <Card className='w-full'>
          <p>
            Ludosport Occitanie englobe les écoles de Lunel, Montpellier et de Nîmes. Notre Académie à été fondée en
            2016, d’abord a Lunel et Montpellier, puis à Nîmes en 2021. <br />
            <br />
            Nous sommes la première académie de combat sportif au sabre laser du sud de la France.
          </p>
        </Card>

        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
          <Card>
            <p className='font-bold text-xl'>
              <LabelIcon icon={MapPinIcon} label='Loin de Montpellier ou Nîmes ?' />
            </p>

            <p>
              Ludosport est présent dans 10 villes en France : Paris, Lyon, Montpellier, Nîmes, Tours, Bussy
              Saint-Georges, Lagny-sur-Marne et La Réunion (Saint-Denis, Saint-Paul & Saint-Pierre). De nouvelles
              académies ouvrent chaque année !
            </p>

            <a
              aria-label='Visitez Ludosport France'
              className='inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline'
              href='https://france.ludosport.net/'
              rel='noreferrer'
              target='_blank'>
              {"Plus d'informations sur le site de Ludosport France"} <ExternalLinkIcon className='h-4 w-4' />
            </a>

            <p>Envie d'ouvrir une nouvelle école dans votre ville, n'hésitez pas à nous contacter pour en discuter.</p>
          </Card>

          <Card>
            <p className='font-bold text-xl'>
              <LabelIcon icon={Share2Icon} label="À l'international" />
            </p>

            <p>
              L'Italie, berceau de Ludosport, héberge Ludosport International. Découvrez les académies à travers le
              monde, des détails sur le sport et le réseau. Ludosport est également présent en Espagne, Angleterre,
              Suède, États-Unis, Japon, Brésil et bien d'autres pays !
            </p>

            <a
              aria-label='Visitez Ludosport International'
              className='inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline'
              href='https://ludosport.net/'
              rel='noreferrer'
              target='_blank'>
              {'Découvrir le réseau international'} <ExternalLinkIcon className='h-4 w-4' />
            </a>
          </Card>
        </div>

        <Gallery />

        <Videos />

        <TrialCourseCta />
      </div>
    </section>
  );
};

export default Presentation;
