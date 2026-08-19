import { CrossIcon, HandshakeIcon, HeartHandshakeIcon } from 'lucide-react';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';
import Title from '../ui/title.component';

const PrinciplesInfo = () => {
  return (
    <>
      <Title id='principles-title' text='Principes : Se.Cu.Ri' />

      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-3'>
        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={HeartHandshakeIcon} label='Service (Servizio)' />
          </p>

          <p>
            Le Service est la volonté que montre chaque élève à aider ses compagnons sur la voie de l’amélioration
            technique, en les encourageant activement et à tout moment à atteindre leurs propres limites pour mieux les
            dépasser.
          </p>
        </Card>

        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={CrossIcon} label='Soin (Cura)' />
          </p>

          <p>
            Le Soin, l’Attention, se manifeste dans le contrôle pratique des techniques et l’attention générale apportée
            à la sécurité de tous.
          </p>
        </Card>

        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={HandshakeIcon} label='Respect (Rispetto)' />
          </p>

          <p>
            Le Respect naît de la conscience de soi, de ses propres limites et de ses points forts. Il mène à des
            relations saines avec autrui, en ne sous-estimant jamais un autre élève, quel que soit son niveau ou son
            expérience. Chaque combat devient ainsi une opportunité de grandir, tant sur le plan personnel que
            collectif.
          </p>
        </Card>
      </div>
    </>
  );
};

export default PrinciplesInfo;
