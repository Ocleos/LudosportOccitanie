import { MessageCircleQuestionMarkIcon } from 'lucide-react';
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
            Le Ludosport est un sport d'opposition qui utilise un sabre laser. Ce n'est pas une chorégraphie. C'est
            plutôt un système ayant ses propres règles et ses propres techniques.
            <br />
            <br />
            Développé en Italie depuis 2006, le Ludosport tire ses inspirations de divers arts martiaux et divers sports
            à l'épée. Cela permet à chaque athlète de créer son style de combat unique.
          </p>
        </Card>

        <PrinciplesInfo />

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

        <Gallery />

        <Videos />

        <TrialCourseCta />
      </div>
    </section>
  );
};

export default Presentation;
