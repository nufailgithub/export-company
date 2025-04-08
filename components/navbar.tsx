"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Farms", href: "/#farms" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return pathname === "/"
    }
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-green-600 p-1.5 rounded-full">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-gray-900 hidden sm:inline-block">Global Trading & Marketing</span>
              <span className="font-bold text-gray-900 sm:hidden">GTM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  isActive(link.href) ? "text-green-600" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-white border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${isActive(link.href) ? "text-green-600" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

