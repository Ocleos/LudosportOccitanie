import type { LucideIcon } from 'lucide-react';

type MaskIconProps = {
  icon: LucideIcon | string;
  className?: string;
};

const MaskIcon: React.FC<MaskIconProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <>
      {typeof Icon === 'string' ? (
        <span
          aria-hidden='true'
          className={`block h-6 w-6 bg-primary ${props.className}`}
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
        <Icon className={`h-6 w-6 text-primary ${props.className}`} />
      )}
    </>
  );
};

export default MaskIcon;
