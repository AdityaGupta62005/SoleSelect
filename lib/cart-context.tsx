"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { Shoe } from "./data"

interface CartItem {
  shoe: Shoe
  size: string
  color: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (shoe: Shoe, size: string, color: string, quantity?: number) => void
  removeFromCart: (shoeId: string, size: string, color: string) => void
  updateQuantity: (shoeId: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (shoe: Shoe, size: string, color: string, quantity = 1) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.shoe.id === shoe.id && item.size === size && item.color === color)

      if (existingItem) {
        return prev.map((item) =>
          item.shoe.id === shoe.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...prev, { shoe, size, color, quantity }]
    })
  }

  const removeFromCart = (shoeId: string, size: string, color: string) => {
    setItems((prev) => prev.filter((item) => !(item.shoe.id === shoeId && item.size === size && item.color === color)))
  }

  const updateQuantity = (shoeId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(shoeId, size, color)
      return
    }

    setItems((prev) =>
      prev.map((item) =>
        item.shoe.id === shoeId && item.size === size && item.color === color ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.shoe.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
