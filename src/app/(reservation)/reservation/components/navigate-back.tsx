'use client';

import { Button } from '@/src/components/ui/button';
import { Icons } from '@/src/components/icons';
import { useRouter } from 'next/navigation';

export function NavigateBack() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      onClick={() => router.back()}
      className="size-10 rounded-full"
    >
      <Icons.chevronBack className="size-5" />
    </Button>
  );
}
