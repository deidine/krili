import { cn } from "@/src/lib/utils";
import { LoadingDots } from "./loading-dots";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

 
export function CarCardSkeleton() {
  return (
    <div className="size-full rounded-xl border border-black/10 bg-white shadow-sm">
      <div className="mb-8 flex justify-between p-6">
        <Skeleton className="h-5 w-1/2" />
        <div className="flex w-1/3 gap-1.5">
          <Skeleton className="size-5 shrink-0" />
          <Skeleton className="h-5 w-full" />
        </div>
      </div>
      <div className="mt-2 p-6 pt-2">
        <Skeleton className="h-[75px] w-full" />
        <div className="mt-[52px] flex items-center justify-between gap-2">
          <Skeleton className="h-3.5 w-1/4" />
          <Separator
            orientation="vertical"
            decorative
            className="h-3.5 border-neutral-100"
          />
          <Skeleton className="h-3.5 w-1/4" />
          <Separator
            orientation="vertical"
            decorative
            className="h-4 border-neutral-100"
          />
          <Skeleton className=" h-4 w-1/4" />
        </div>
        <Skeleton className="mt-5 h-4 w-1/2" />
      </div>
      <div className="p-2.5 pt-0">
        <Skeleton className="h-9 w-full rounded-[5px]" />
      </div>
    </div>
  );
}

export function CarCatalogSkeleton() {
  return (
    <div className="px-5 pb-10 pt-8 sm:px-6 sm:pb-10 sm:pt-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch justify-center gap-6">
        <CarCardSkeleton />
        <CarCardSkeleton />
        <CarCardSkeleton />
        <CarCardSkeleton />
        <CarCardSkeleton />
        <CarCardSkeleton />
        <CarCardSkeleton />
        <CarCardSkeleton />
      </div>
    </div>
  );
}

export function MapSkeleton() {
  return (
    <div className="flex h-[var(--map-container-height)] items-center justify-center gap-x-2.5 bg-neutral-200">
      <LoadingDots />
    </div>
  );
}

export function SearchFormSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        'mx-auto grid grid-cols-[1.25fr_auto_1fr_auto_1fr_auto] items-center justify-between gap-x-2 whitespace-nowrap rounded-full border border-black/10 bg-white p-2',
        compact ? 'h-[58px] w-[720px]' : 'h-[68px] w-[860px]',
      )}
    >
      <div>
        <div className="grid size-full grid-cols-1 items-start justify-center gap-y-2 overflow-x-hidden px-4">
          <Skeleton className={cn('w-28', compact ? 'h-2' : 'h-3')} />
          <Skeleton className={cn('w-24', compact ? 'h-3' : 'h-4 ')} />
        </div>
      </div>
      <Separator
        orientation="vertical"
        decorative
        className={compact ? 'h-6' : 'h-8'}
      />
      <div>
        <div className="grid size-full grid-cols-1 items-start justify-center gap-y-2 overflow-x-hidden px-4">
          <Skeleton className={cn('w-16', compact ? 'h-2' : 'h-3')} />
          <Skeleton className={cn('w-20', compact ? 'h-3' : 'h-4 ')} />
        </div>
      </div>
      <Separator
        orientation="vertical"
        decorative
        className={compact ? 'h-6' : 'h-8'}
      />
      <div>
        <div className="grid size-full grid-cols-1 items-start justify-center gap-y-2 overflow-x-hidden px-4">
          <Skeleton className={cn('w-16', compact ? 'h-2' : 'h-3')} />
          <Skeleton className={cn('w-20', compact ? 'h-3' : 'h-4 ')} />
        </div>
      </div>
      <Skeleton
        className={cn('rounded-full', compact ? 'size-9' : 'size-12')}
      />
    </div>
  );
}

export function CarOverviewSkeleton() {
  return (
    <div className="p-6 px-0 pb-0 md:pb-0 md:pr-6">
      <div className="grid grid-cols-[1fr_auto] justify-between">
        <div className="flex flex-col">
          <Skeleton className="h-7 w-44" />
          <div className="mt-2 flex items-center gap-1.5 text-[13px] text-neutral-800 md:text-base">
            <Skeleton className="h-4 w-12" />
            <span>·</span>
            <Skeleton className="h-4 w-12" />
            <span>·</span>
            <Skeleton className="h-4 w-12" />
            <span>·</span>
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <div className="flex flex-col justify-self-end">
          <Skeleton className="h-[48px] w-[85px]" />
        </div>
      </div>
      <Separator decorative orientation="horizontal" className="my-6" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-8">
          <Skeleton className="size-6 shrink-0" />
          <div className="flex flex-col">
            <Skeleton className="h-5 w-14" />
            <Skeleton className="mt-2 h-3 w-40" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Skeleton className="size-6 shrink-0" />
          <div className="flex flex-col">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="mt-2 h-3 w-40" />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <Skeleton className="size-6 shrink-0" />
          <Skeleton className="h-5 w-56" />
        </div>
      </div>
      <Separator decorative orientation="horizontal" className="my-6" />
      <div className="mt-10 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      </div>
      <Separator decorative orientation="horizontal" className="my-12" />
      <div className="mb-6">
        <Skeleton className="h-6 w-48" />
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="flex flex-row gap-4">
            <Skeleton className="size-5 shrink-0" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReservationSidebarSkeleton() {
  return (
    <div className="hidden normal-nums md:block">
      <div className="sticky top-[calc(var(--site-header-height)+24px)] rounded-xl border p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 items-baseline gap-4 leading-none lg:grid-cols-2">
          <div className="flex items-baseline gap-1.5 ">
            <Skeleton className="h-5 w-36 shrink-0" />
          </div>
          <div className="flex flex-row items-baseline justify-start gap-1 tracking-tight lg:justify-end">
            <Skeleton className="size-4" />
            <Skeleton className="h-4 w-28 shrink-0" />
          </div>
        </div>
        <div className="mt-6 w-full rounded-xl border border-neutral-300">
          <div className="flex flex-col border-b border-neutral-300">
            <div className="flex flex-col gap-1.5 p-2.5">
              <Skeleton className="h-[10px] w-24" />
              <Skeleton className="h-[14px] w-36" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex flex-col gap-1.5 p-2.5">
                <Skeleton className="h-[10px] w-14" />
                <Skeleton className="h-[14px] w-24" />
              </div>
            </div>
            <div className="border-l border-neutral-300">
              <div className="flex flex-col gap-1.5 p-2.5">
                <Skeleton className="h-[10px] w-14" />
                <Skeleton className="h-[14px] w-24" />
              </div>
            </div>
          </div>
        </div>
        <Skeleton className="mt-4 h-12 w-full" />
        <Skeleton className="mx-auto mt-4 h-4 w-60" />
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-5 w-28" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Separator decorative orientation="horizontal" className="my-6" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-5 w-28" />
          </div>
        </div>
      </div>
    </div>
  );
}
