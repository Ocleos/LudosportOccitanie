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
            Il contribue au bien-être de la communauté sportive et de ses pratiquants, en plaçant le fair-play au-dessus
            des intérêts personnels ; c’est la volonté de chaque étudiant de soutenir ses pairs dans leur progression
            technique, en encourageant constamment la recherche et le dépassement de ses propres limites.
          </p>
        </Card>

        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={CrossIcon} label='Soin (Cura)' />
          </p>

          <p>
            Consiste à protéger la santé, la sécurité et la dignité de chaque personne ; prévenir les blessures et gérer
            les risques de manière responsable ; exprimé à travers le contrôle technique et l'attention à sa propre
            sécurité et à celle des autres.
          </p>
        </Card>

        <Card>
          <p className='font-bold text-xl'>
            <LabelIcon icon={HandshakeIcon} label='Respect (Rispetto)' />
          </p>

          <p>
            Il s'agit d'observer les règles, les décisions des instances compétentes, les adversaires, les arbitres,
            l'environnement et la communauté ; cela vient de la conscience de soi et mène à des relations correctes,
            sans jamais sous-estimer personne.
          </p>
        </Card>
      </div>
    </>
  );
};

export default PrinciplesInfo;
