'use client';

import { Button } from '@/components/ui/button';
import { SearchParams } from '@/src/app/lib/types';
import { createUrl } from '@/src/app/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';  

export function CarDetailsButton({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const location = searchParams.get(SearchParams.LOCATION);
  const checkin = searchParams.get(SearchParams.CHECKIN);
  const checkout = searchParams.get(SearchParams.CHECKOUT);

  if (location) newParams.set(SearchParams.LOCATION, location);
  if (checkin) newParams.set(SearchParams.CHECKIN, checkin);
  if (checkout) newParams.set(SearchParams.CHECKOUT, checkout);

  const href = createUrl(`/car/${slug}`, newParams);

  return (
    <Button size={'sm'} className="w-full rounded-[5px]" asChild>
      <Link href={href}>View details</Link>
    </Button>
  );
}
