"use client";

import { Icons } from "@/src/components/icons";
import { Modal } from "@/src/components/modal";
import { Button } from "@/src/components/ui/button";
import React from "react";
import { CarCard } from "./components/car-card";
import { Car } from "@/src/db/definitions";

export default function ViewCar({ index, car }: { index: number; car: Car }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleModalToggle = ()=>{
    setIsModalOpen((prevState) => !prevState);
  }

 
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOpenChange={handleModalToggle}
        trigger={
          <Button
            variant="outline"
            className="relative flex items-center justify-center gap-x-2.5"
          >
            <Icons.navigationArrow className="size-[22px]" />
            <span>View</span>
          </Button>
        }
        title="View car"
        footer={
          <div className="flex w-full items-center justify-between gap-x-2">
           
          </div>
        }
      >
        <>
          <CarCard index={index} car={car} />
        </>
      </Modal>
    </div>
  );
}
