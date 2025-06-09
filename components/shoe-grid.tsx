import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { getShoes } from "@/lib/data"

export default async function ShoeGrid() {
  const shoes = await getShoes()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="group relative bg-white dark:bg-gray-950 rounded-lg border overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <Image
              src={shoe.image || "/placeholder.svg"}
              alt={shoe.name}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-lg">{shoe.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{shoe.brand}</p>
              </div>
              {shoe.isNew && (
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                >
                  New
                </Badge>
              )}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">₹{shoe.price.toFixed(2)}</span>
              <Button size="sm" className="rounded-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
          <Link href={`/shoes/${shoe.id}`} className="absolute inset-0">
            <span className="sr-only">View details for {shoe.name}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
