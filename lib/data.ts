export interface Shoe {
  id: string
  name: string
  brand: string
  price: number
  image: string
  description: string
  colors: string[]
  sizes: string[]
  isNew?: boolean
  isFeatured?: boolean
}

// Mock data function - in a real app, this would fetch from an API
export async function getShoes(): Promise<Shoe[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "1",
      name: "Air Max 270",
      brand: "Nike",
      price: 17599,
      image: "/Air Max 270.png",
      description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270.",
      colors: ["Black", "White", "Red"],
      sizes: ["7", "8", "9", "10", "11"],
      isNew: true,
    },
    {
      id: "2",
      name: "Ultraboost 22",
      brand: "Adidas",
      price: 14500,
      image: "/Ultraboost 22.png",
      description: "Responsive shoes made in part with Parley Ocean Plastic.",
      colors: ["Black", "White", "Blue"],
      sizes: ["7", "8", "9", "10", "11", "12"],
    },
    {
      id: "3",
      name: "Classic Leather",
      brand: "Reebok",
      price: 18000,                                                                                                                                     
      image: "/classic leather.png",
      description: "Clean, classic and comfortable. These shoes deliver a timeless look.",
      colors: ["White", "Black", "Gray"],
      sizes: ["6", "7", "8", "9", "10"],
    },
    {
      id: "4",
      name: "Old Skool",
      brand: "Vans",
      price: 5999,
      image: "/old skool.png",
      description: "The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe.",
      colors: ["Black", "Blue", "Red"],
      sizes: ["6", "7", "8", "9", "10", "11"],
      isNew: true,
    },
    {
      id: "5",
      name: "Chuck Taylor All Star",
      brand: "Converse",
      price: 10999,
      image: "/chuck taylor.png",
      description: "The Chuck Taylor All Star is the most iconic sneaker in the world.",
      colors: ["Black", "White", "Red", "Blue"],
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },
    {
      id: "6",
      name: "Suede Classic",
      brand: "Puma",
      price: 11000,
      image: "/Suede Classic.png",
      description: "The Suede has been a street icon since its introduction in 1968.",
      colors: ["Black", "Blue", "Red", "Green"],
      sizes: ["7", "8", "9", "10", "11"],
    },
  ]
}

export async function getFeaturedShoes(): Promise<Shoe[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return [
    {
      id: "7",
      name: "Air Jordan 1",
      brand: "Nike",
      price: 27899,
      image: "/Air Jordan 1.png",
      description: "The iconic silhouette that started it all.",
      colors: ["Red", "Black", "White"],
      sizes: ["7", "8", "9", "10", "11", "12"],
      isFeatured: true,
    },
    {
      id: "8",
      name: "Yeezy Boost 350",
      brand: "Adidas",
      price: 8299,
      image: "/Yeezy Boost 350.png",
      description: "Revolutionary comfort and design.",
      colors: ["Gray", "Black", "White"],
      sizes: ["7", "8", "9", "10", "11", "12"],
      isFeatured: true,
    },
    {
      id: "9",
      name: "Air Force 1",
      brand: "Nike",
      price: 17500,
      image: "/Air Force 1.png",
      description: "A streetwear legend since 1982.",
      colors: ["White", "Black", "Blue"],
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      isFeatured: true,
    },
  ]
}

export async function getShoeById(id: string): Promise<Shoe | undefined> {
  const allShoes = [...(await getShoes()), ...(await getFeaturedShoes())]
  return allShoes.find((shoe) => shoe.id === id)
}
