import { MapSkeleton } from '@/src/components/skeletons';
import { getLocations } from '@/src/db/queries';
import dynamic from 'next/dynamic'; 

const DynamicMap = dynamic(
  async () => {
    const { Map } = await import('./map');
    return { default: Map };
  },
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  },
);

export async function MapContainer() {
  const locations = await getLocations();

  return (
    <div className="sticky top-[var(--header-gap)] z-10 basis-auto">
      <DynamicMap locations={locations} />
    </div>
  );
}
