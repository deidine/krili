'use client';

import { useEffect } from 'react';
import { Button } from '@/src/components/ui/button';
import { SiteHeader } from '@/src/components/site-header';
import { SiteFooter } from '@/src/components/site-footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="sticky top-0 z-30 bg-[hsla(0,0%,100%,.8)] shadow-[inset_0_-1px_0_0_#eaeaea] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto w-full max-w-none h-[var(--site-header-height)] px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <SiteHeader />
        </div>
      </div>
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <main className="flex flex-col items-center justify-center w-full gap-4 py-52">
          <h2 className="text-2xl font-bold text-center">
            Something went wrong!
          </h2>
          <p className="text-neutral-600 max-w-prose mb-4 text-center">
            It seems like there&apos;s a hiccup on our end. Our team is working
            hard to fix the issue. We appreciate your patience and
            understanding.
          </p>
          <Button
            className="xl:hidden text-[15px]"
            onClick={
              // Attempt to recover by trying to re-render the current route
              () => reset()
            }
          >
            Try again
          </Button>
          <Button
            size="xl"
            className="hidden xl:flex text-[15px]"
            onClick={
              // Attempt to recover by trying to re-render the current route
              () => reset()
            }
          >
            Try again
          </Button>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
