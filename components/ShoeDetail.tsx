'use client'

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
// import { getShoeById, type Shoe } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

import { Shoe } from '@/lib/data'

function AddToCartSection({ shoe }: { shoe: Shoe }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }
    addToCart(shoe, selectedSize, selectedColor)
    alert("Added to cart!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Color</h3>
        <div className="flex flex-wrap gap-2">
          {shoe.colors.map((color) => (
            <Button
              key={color}
              variant={selectedColor === color ? "default" : "outline"}
              size="sm"
              className="rounded-full px-4 h-8"
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Size</h3>
        <div className="grid grid-cols-5 gap-2">
          {shoe.sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              size="sm"
              className="h-10"
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t">
        <div className="flex gap-4">
          <Button size="lg" className="flex-1" onClick={handleAddToCart}>
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
          <Button size="lg" variant="outline" className="flex-1">
            Add to Wishlist
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ShoeDetail({ shoe }: { shoe: Shoe }) {

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-sm mb-6 hover:text-primary">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all shoes
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            <Image src={shoe.image || "/placeholder.svg"} alt={shoe.name} fill className="object-cover" priority />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square relative rounded-md overflow-hidden border">
                <Image
                  src={shoe.image || "/placeholder.svg"}
                  alt={`${shoe.name} view ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">{shoe.brand}</p>
              <div className="ml-auto flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">(24 reviews)</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">{shoe.name}</h1>
            <p className="text-2xl font-bold mb-4">₹{shoe.price.toFixed(2)}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{shoe.description}</p>
          </div>

          <AddToCartSection shoe={shoe} />
          <div className="mt-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Check className="h-4 w-4 mr-2 text-green-500" />
            In stock and ready to ship
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details & Care</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The {shoe.name} by {shoe.brand} is designed for both performance and style. Featuring innovative
                cushioning technology and premium materials, these shoes deliver exceptional comfort for all-day wear.
              </p>
              <p>
                The breathable upper keeps your feet cool, while the durable outsole provides excellent traction on
                various surfaces. Whether you're hitting the gym, running errands, or meeting friends, these versatile
                shoes are the perfect choice.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="details" className="py-6">
            <div className="prose dark:prose-invert max-w-none">
              <ul>
                <li>Upper: Synthetic and textile materials</li>
                <li>Midsole: Responsive cushioning</li>
                <li>Outsole: Rubber for durability and traction</li>
                <li>Lace closure for a secure fit</li>
                <li>Padded collar and tongue for added comfort</li>
                <li>Imported</li>
              </ul>
              <h3>Care Instructions</h3>
              <p>
                Clean with a soft, dry cloth. For stubborn stains, use a mild soap and water solution. Air dry away from
                direct heat or sunlight. Do not machine wash or dry.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-6">
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium">John D.</span>
                    <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="font-medium mb-2">Great shoes, very comfortable!</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I've been wearing these for about a month now and they're holding up great. Very comfortable for
                    all-day wear and they look amazing with jeans or athletic wear.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}