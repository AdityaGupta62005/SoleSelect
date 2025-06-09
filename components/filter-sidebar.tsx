"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border p-4 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" className="h-8 text-xs">
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["price", "size", "color", "brand"]} className="space-y-4">
        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-sm font-medium">Price Range</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 pb-4">
              <Slider
                defaultValue={[0, 300]}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-6"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">₹{priceRange[0]}</span>
                <span className="text-sm">₹{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size" className="border-b-0">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-sm font-medium">Size</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2 pt-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  size="sm"
                  className={cn("h-8 text-xs", selectedSizes.includes(size) && "bg-primary text-primary-foreground")}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color" className="border-b-0">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-sm font-medium">Color</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {colors.map((color) => (
                <div key={color.name} className="flex items-center space-x-2">
                  <div
                    className={cn(
                      "h-5 w-5 rounded-full border",
                      selectedColors.includes(color.name) && "ring-2 ring-primary ring-offset-2",
                      color.class,
                    )}
                    style={color.hex ? { backgroundColor: color.hex } : {}}
                    onClick={() => handleColorToggle(color.name)}
                  >
                    {selectedColors.includes(color.name) && <Check className="h-3 w-3 text-white mx-auto mt-1" />}
                  </div>
                  <Label
                    htmlFor={`color-${color.name}`}
                    className="text-sm cursor-pointer"
                    onClick={() => handleColorToggle(color.name)}
                  >
                    {color.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand" className="border-b-0">
          <AccordionTrigger className="py-2 hover:no-underline">
            <span className="text-sm font-medium">Brand</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandToggle(brand)}
                  />
                  <Label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-6">Apply Filters</Button>
    </div>
  )
}

const sizes = ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"]

const colors = [
  { name: "Black", class: "bg-black", hex: "#000000" },
  { name: "White", class: "bg-white border-gray-200", hex: "#FFFFFF" },
  { name: "Red", class: "bg-red-500", hex: "#EF4444" },
  { name: "Blue", class: "bg-blue-500", hex: "#3B82F6" },
  { name: "Green", class: "bg-green-500", hex: "#22C55E" },
  { name: "Yellow", class: "bg-yellow-500", hex: "#EAB308" },
  { name: "Purple", class: "bg-purple-500", hex: "#A855F7" },
  { name: "Pink", class: "bg-pink-500", hex: "#EC4899" },
  { name: "Gray", class: "bg-gray-500", hex: "#6B7280" },
  { name: "Brown", class: "bg-amber-800", hex: "#92400E" },
]

const brands = ["Nike", "Adidas", "Puma", "New Balance", "Reebok", "Converse", "Vans", "Under Armour", "Asics", "Fila"]
