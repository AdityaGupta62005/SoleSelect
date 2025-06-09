"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Order {
  id: string
  items: any[]
  total: number
  shippingInfo: any
  status: string
  date: string
}

export default function OrderConfirmationPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const foundOrder = orders.find((o: Order) => o.id === params.id)
    setOrder(foundOrder)
  }, [params.id])

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Thank you for your order. Your order #{order.id} has been confirmed and will be shipped soon.
      </p>

      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg max-w-md mx-auto mb-8">
        <h2 className="font-semibold mb-4">Order Details</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Order Number:</span>
            <span>#{order.id}</span>
          </div>
          <div className="flex justify-between">
            <span>Total:</span>
            <span>₹{order.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Status:</span>
            <span className="capitalize">{order.status}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/orders">View Order History</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
