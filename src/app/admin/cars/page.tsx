import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <Link  href={"/admin/cars/add"} >
        ajouter
        </Link>
         <Link  href={"/admin/cars/all"} >
        toute les cars
        </Link>
    </div>
  )
}
