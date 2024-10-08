'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'; 
import { Separator } from '@/src/components/ui/separator';
import { Icons } from '@/src/components/icons'; 
import { CloudinaryImage } from '@/src/components/cloudinary-image';
import { cn, formatCurrency } from '@/src/lib/utils';
import { Car } from '@/src/db/definitions';

interface CarCardProps {
  index: number;
  car:Car }

export   function CarCard({ index, car }: CarCardProps) {
 
  const {
    name,
    image_url,
    transmission,
    engine_type,
    seats,
    discounted_price_per_day,
    discounted_price_currency,
    retail_price_per_day,
    retail_price_currency,
    rating,
    reviews,
    unlimited_mileage,
  } = car;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-baseline justify-between gap-x-2 whitespace-nowrap">
          <CardTitle className="inline-block max-w-full overflow-hidden text-ellipsis text-left text-[15px] font-semibold">
            {name}
          </CardTitle>
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <Icons.star className="size-[14px] self-center" />
              <span className="text-sm font-medium leading-none text-neutral-600">
                {rating} {reviews > 0 && `(${reviews})`}
              </span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'flex items-center justify-start text-[13px] leading-none text-neutral-600',
            !unlimited_mileage && 'invisible',
          )}
        >
          <Icons.speedometer className="mr-1.5 inline-block size-4" />
          Unlimited mileage
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-4">
          <CloudinaryImage
            src={image_url}
            alt={name}
            height={72}
            width={128}
            priority={index < 8}
          />
        </div>
        <div className="mx-auto mt-8 flex max-w-[220px] items-center justify-between gap-x-1.5">
          <p className="text-sm text-neutral-600">{transmission}</p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-sm text-neutral-600">
            <span className="leading-none">{engine_type}</span>
          </p>
          <Separator orientation="vertical" decorative className="h-4" />
          <p className="text-sm text-neutral-600">
            <span className="leading-none">{seats}</span> Seats
          </p>
        </div>
        <div className="mt-3 text-base">
          {discounted_price_per_day ? (
            <>
              <span className="mr-1.5 leading-none text-neutral-500 line-through">
                {retail_price_per_day}
              </span>
              <span className="font-semibold leading-none">
                { discounted_price_per_day}
                  {  discounted_price_currency  }
              </span>
            </>
          ) : (
            <span  >
              {retail_price_per_day} {retail_price_currency}
            </span>
          )}
          <span className="ml-1.5 text-[15px] font-medium leading-none text-neutral-700">
            day
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-2.5 pt-0">
        {/* <CarDetailsButton slug={slug} /> */}
      </CardFooter>
    </Card>
  );
}
