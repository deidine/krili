// "use client";
import React from "react";
import { Car } from "@/src/db/definitions";
import { getCars } from "@/src/db/adminQueries/cars/adminQueries";
import ViewCar from "./viewCar";
import { DeleteCar } from "./components/DeleteCar";

export default async function page() {
  const [cars] = await Promise.all([getCars()]); 
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead> 
              <tr>
                <th className="px-4 py-3">{cars.fields[2].name}</th>
                <th className="px-4 py-3">{cars.fields[3].name}</th>
                <th className="px-4 py-3">{cars.fields[3].name}</th>
                <th className="px-4 py-3">{cars.fields[9].name}</th>
                <th className="px-4 py-3">{cars.fields[6].name}</th>
                <th className="px-4 py-3">action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {cars.rows.map((car: Car,index:number) => (
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">{car.name} </td>
                  <td className="px-4 py-3 border">{car.body_style} </td>
                  <td className="px-4 py-3 border">{car.features} </td>
                  <td className="px-4 py-3 border">{car.reviews} </td>
                  <td className="px-4 py-3 border">{car.seats} </td>
                  <td className="px-4 py-3 border">
                    <DeleteCar id={car.id}/>
                  <ViewCar index={index} car={car} />                   
                   </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
 