import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPinIcon, TramFrontIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Card from '../ui/card.component';
import LabelIcon from '../ui/labelIcon.component';

type PlaceCardProps = {
  id: string;
  title: string;
  address: string;
  accesses: string[];
  latitude: number;
  longitude: number;
};

const MAP_ZOOM = 16;

// Pin-shaped marker rendered as real DOM (not an image), so it can pick up the theme's primary color via CSS.
const markerIcon = L.divIcon({
  className: '',
  html: `<svg height="48" viewBox="0 0 24 36" width="32" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24C24 5.373 18.627 0 12 0z"
      fill="var(--color-primary)"
      stroke="#fff"
      stroke-width="1.5"
    />
    <circle cx="12" cy="12" fill="#fff" r="4.5" />
  </svg>`,
  iconAnchor: [16, 48],
  iconSize: [32, 48],
});

const PlaceCard: React.FC<PlaceCardProps> = (props) => {
  const { id, title, address, accesses, latitude, longitude } = props;

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    const map = L.map(mapContainerRef.current, {
      center: [latitude, longitude],
      scrollWheelZoom: false,
      zoom: MAP_ZOOM,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);

    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return (
    <Card className='scroll-mt-24' id={id}>
      <p className='font-bold text-xl'>{title}</p>

      <LabelIcon icon={MapPinIcon} label={address} />

      <div
        aria-label={`Carte de localisation - ${title}`}
        className='relative isolate h-64 w-full rounded-lg border border-white/20'
        ref={mapContainerRef}
        role='region'
      />

      {accesses.length > 0 && (
        <div className='flex flex-col gap-2'>
          <LabelIcon icon={TramFrontIcon} label={'Accès'} />

          <ul className='list-disc space-y-2 pl-6 text-left'>
            {accesses.map((access) => (
              <li key={access}>{access}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default PlaceCard;
