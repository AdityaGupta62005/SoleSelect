import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SoleSelect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your premier destination for booking the perfect pair of shoes.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/men" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/category/women" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/category/kids" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoleSelect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
