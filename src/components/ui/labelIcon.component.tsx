import type { LucideIcon } from 'lucide-react';

type LabelIconProps = {
  icon: LucideIcon | string;
  label: string;
};

const LabelIcon: React.FC<LabelIconProps> = (props) => {
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
      {props.label}
    </p>
  );
};

export default LabelIcon;
