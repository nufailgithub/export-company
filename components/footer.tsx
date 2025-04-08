import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-1.5 rounded-full">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">GTM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Global Trading & Marketing (Pvt) Limited is a premier exporter of fresh fruits and vegetables from Sri
              Lanka to global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#farms" className="text-gray-400 hover:text-white transition-colors">
                  Our Farms
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Tropical Fruits</li>
              <li className="text-gray-400">Fresh Vegetables</li>
              <li className="text-gray-400">Spices & Herbs</li>
              <li className="text-gray-400">Organic Produce</li>
              <li className="text-gray-400">Seasonal Specialties</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Export Zone, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@gtm-srilanka.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Global Trading & Marketing (Pvt) Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

