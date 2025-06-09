import { Suspense } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import ShoeGrid from "@/components/shoe-grid"
import FilterSidebar from "@/components/filter-sidebar"
import SearchBar from "@/components/search-bar"
import FeaturedShoes from "@/components/featured-shoes"
import { Skeleton } from "@/components/ui/skeleton"
import ProtectedRoute from "@/components/protected-route"

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-6">
        <section className="mb-12">
          <div className="relative h-[500px] w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/Banner.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Step Into Style</h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Browse our exclusive collection and book your perfect pair today
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#featured">Shop Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  View Collections
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Shoes</h2>
          <Suspense fallback={<FeaturedShoesSkeleton />}>
            <FeaturedShoes />
          </Suspense>
        </section>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-64 shrink-0">
            <FilterSidebar />
          </aside>
          <main className="flex-1">
            <div className="mb-6">
              <SearchBar />
            </div>
            <Suspense fallback={<ShoeGridSkeleton />}>
              <ShoeGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}

function FeaturedShoesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}

function ShoeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-[250px] w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}
