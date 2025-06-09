import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { getFeaturedShoes } from "@/lib/data"

export default async function FeaturedShoes() {
  const featuredShoes = await getFeaturedShoes()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredShoes.map((shoe) => (
        <div key={shoe.id} className="group relative bg-white dark:bg-gray-950 rounded-lg border overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <Image
              src={shoe.image || "/placeholder.svg"}
              alt={shoe.name}
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="font-bold text-xl text-white mb-2">{shoe.name}</h3>
            <p className="text-white/90 mb-4">{shoe.description}</p>
            <Button asChild className="w-full">
              <Link href={`/shoes/${shoe.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
