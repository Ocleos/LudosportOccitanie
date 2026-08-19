import { ExternalLinkIcon, type LucideIcon } from 'lucide-react';

type LabelLinkIconProps = {
  icon: LucideIcon | string;
  link: string;
  ariaLabel: string;
  label?: string;
};

const LabelLinkIcon: React.FC<LabelLinkIconProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <p className='flex items-center gap-2'>
      {typeof Icon === 'string' ? (
        <span
          aria-hidden='true'
          className='block h-6 w-6 bg-primary'
          style={{
            maskImage: `url(${Icon})`,
            maskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskImage: `url(${Icon})`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
          }}
        />
      ) : (
        <Icon className='h-6 w-6 text-primary' />
      )}

      <a
        aria-label={props.ariaLabel}
        className='inline-flex items-center gap-1 underline-offset-4 hover:underline'
        href={props.link}
        rel='noreferrer'
        target='_blank'>
        {props.label ? `${props.label}` : 'En savoir plus'} <ExternalLinkIcon className='h-4 w-4 text-white' />
      </a>
    </p>
  );
};

export default LabelLinkIcon;
