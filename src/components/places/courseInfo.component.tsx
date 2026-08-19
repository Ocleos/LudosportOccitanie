import { ClockIcon, SwordsIcon, UserIcon } from 'lucide-react';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';

const CourseInfo = () => {
  return (
    <>
      <Card>
        <p>
          Nos cours se déroulent de début septembre à fin juin, avec des pauses pendant les vacances scolaires. Chaque
          session dure 2h00.
        </p>

        <p className='font-bold text-xl'>
          <LabelIcon icon={ClockIcon} label="Structure d'un cours" />
        </p>

        <ul className='list-disc pl-4'>
          <li>
            <span className='font-bold'>15' - Préparation</span> : Échauffements, assouplissements et renforcements
            musculaires adaptés à la forme travaillée
          </li>
          <li>
            <span className='font-bold'>1h15' - Enseignement</span> : Apprentissage et pratique des techniques,
            répétition d'enchaînements et concepts de la forme
          </li>
          <li>
            <span className='font-bold'>30' - Combats</span> : Mise en pratique des techniques apprises à travers des
            combats
          </li>
        </ul>
      </Card>

      <Card>
        <p className='font-bold text-xl'>
          <LabelIcon icon={SwordsIcon} label='Équipements' />
        </p>

        <p>
          Les sabres laser sont gracieusement prêtés par l'académie que ce soit en cours d'essai ou pour les adhérents.
          Les adhérents auront cependant besoin de gants de protection, d'une coquille et de la tenue officielle. Vous
          pouvez également acheter votre propre sabre laser si vous le souhaitez.
        </p>
      </Card>

      <Card>
        <p className='font-bold text-xl'>
          <LabelIcon icon={UserIcon} label='Débutants' />
        </p>

        <p>
          Tout débutant commence par la Forme I au sabre long, qui constitue le socle du Ludosport. Simple en apparence
          mais très solide en défense, elle enseigne le contrôle des coups, la maîtrise de l'arme et du corps, ainsi que
          les règles fondamentales du sport. Un bon utilisateur de la Forme I mettra en grande difficulté n'importe quel
          autre opposant.
        </p>
      </Card>
    </>
  );
};

export default CourseInfo;
