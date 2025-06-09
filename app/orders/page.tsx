"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Package, Truck, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProtectedRoute from "@/components/protected-route"

interface Order {
  id: string
  items: any[]
  total: number
  shippingInfo: any
  status: string
  date: string
}

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <OrdersContent />
    </ProtectedRoute>
  )
}

function OrdersContent() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    setOrders(storedOrders.reverse()) // Show newest first
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Package className="h-4 w-4" />
      case "shipped":
        return <Truck className="h-4 w-4" />
      case "delivered":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "shipped":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    }
  }

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Package className="h-16 w-16 text-gray-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">No Orders Yet</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          You haven't placed any orders yet. Start shopping to see your order history here.
        </p>
        <Button asChild>
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-gray-950 rounded-lg border p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <Badge className={getStatusIcon(order.status) && getStatusColor(order.status)}>
                  {getStatusIcon(order.status)}
                  <span className="ml-1 capitalize">{order.status}</span>
                </Badge>
                <span className="font-bold">₹{order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid gap-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="w-16 h-16 relative rounded-md overflow-hidden">
                    <Image
                      src={item.shoe.image || "/placeholder.svg"}
                      alt={item.shoe.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.shoe.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.shoe.brand}</p>
                    <p className="text-sm">
                      Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{(item.shoe.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4 pt-4 border-t">
              <Button variant="outline" size="sm">
                Track Order
              </Button>
              <Button variant="outline" size="sm">
                View Details
              </Button>
              {order.status === "delivered" && (
                <Button variant="outline" size="sm">
                  Leave Review
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
