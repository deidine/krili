import { Suspense } from 'react';
import {CarCatalogSkeleton,SearchFormSkeleton} from '@/src/components/skeletons';
import { SiteHeader } from '@/src/components/site-header';
import { SearchForm } from '@/src/components/search-form';
import { Filters } from './components/filters';
import { CarCard } from './components/car-card';
import { MapContainer } from './components/map-container';
import { getCars, getLocations } from '../../db/queries'; 
import { SearchParams } from '@/src/lib/types';
import { slugify } from '@/src/lib/utils';
import { Car } from '@/src/db/definitions';

interface CarsPageProps {
  searchParams: {
    [SearchParams.MIN_PRICE]?: string;
    [SearchParams.MAX_PRICE]?: string;
    [SearchParams.BODY_STYLE]?: string[];
    [SearchParams.ENGINE_TYPE]?: string[];
    [SearchParams.TRANSMISSION]?: string[];
    [SearchParams.MIN_SEATS]?: string;
  };
}

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const [cars, locations] = await Promise.all([getCars(), getLocations()]);

  const carPrices = cars.map((car:Car) => {
    return car.discounted_price_per_day || car.retail_price_per_day;
  });

  const MIN_PRICE = Math.min(...carPrices);
  const MAX_PRICE = Math.max(...carPrices);

  let filteredCars = cars;

  const {
    [SearchParams.MIN_PRICE]: minPrice,
    [SearchParams.MAX_PRICE]: maxPrice,
    [SearchParams.BODY_STYLE]: bodyStyles,
    [SearchParams.ENGINE_TYPE]: engineTypes,
    [SearchParams.TRANSMISSION]: transmissions,
    [SearchParams.MIN_SEATS]: minSeats,
  } = searchParams;

  if (minPrice) {
    filteredCars = filteredCars.filter((car:Car) => {
      const currentPrice =
        car.discounted_price_per_day || car.retail_price_per_day;
      return currentPrice >= Number(minPrice);
    });
  }
  if (maxPrice) {
    filteredCars = filteredCars.filter((car:Car) => {
      const currentPrice =
        car.discounted_price_per_day || car.retail_price_per_day;
      return currentPrice <= Number(maxPrice);
    });
  }
  if (bodyStyles) {
    filteredCars = filteredCars.filter((car:Car) =>
      bodyStyles.includes(slugify(car.body_style)),
    );
  }
  if (engineTypes) {
    filteredCars = filteredCars.filter((car:Car) =>
      engineTypes.includes(slugify(car.engine_type)),
    );
  }
  if (transmissions) {
    filteredCars = filteredCars.filter((car:Car) =>
      transmissions.includes(slugify(car.transmission)),
    );
  }
  if (minSeats) {
    filteredCars = filteredCars.filter((car:Car) => car.seats >= Number(minSeats));
  }

  return (
    <>
      <div className="sticky top-0 z-30 flex h-[var(--height-gap)] w-full flex-col bg-white shadow-[inset_0_-1px_0_0_#eaeaea]">
        <div className="shadow-[inset_0_-1px_0_0_#eaeaea]">
          <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-none sm:px-6">
            <SiteHeader />
          </div>
        </div>
        <div className="hidden h-[var(--search-bar-height)] items-center justify-start lg:flex">
          <div className="mx-auto w-full max-w-none px-5 sm:max-w-none sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-800">
                {filteredCars.length > 0 &&
                  (filteredCars.length > 1
                    ? `${filteredCars.length} cars`
                    : `${filteredCars.length} car`)}
              </p>
              <Filters
                initialMinPrice={MIN_PRICE}
                initialMaxPrice={MAX_PRICE}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(var(--site-header-height)_/_2)] hidden w-full lg:flex">
          <Suspense fallback={<SearchFormSkeleton compact />}>
            <SearchForm locations={locations} compact />
          </Suspense>
        </div>
      </div>
      <main>
        <div className="flex">
          <div className="w-full max-w-[var(--cars-page-main-content-max-width)] shrink-0 grow-0 flex-col overflow-y-auto bg-neutral-50 md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
            <Suspense fallback={<CarCatalogSkeleton />}>
              <div className="px-5 pb-10 pt-8 sm:px-6 sm:pb-10 sm:pt-8">
                {!filteredCars.length ? (
                  <div>
                    <h1 className="text-xl font-semibold">No exact matches</h1>
                    <p className="mt-3 text-slate-700">
                      Try changing or removing some of your filters.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch justify-center gap-6">
                    {filteredCars.map((car:Car, index:number) => (
                    <>  <CarCard key={car.id} index={index} slug={car.slug} /></>
                    ))}
                  </div>
                )}
              </div>
            </Suspense>
          </div>
          <div className="hidden flex-auto md:block">
            <MapContainer />
          </div>
        </div>
      </main>
    </>
  );
}
