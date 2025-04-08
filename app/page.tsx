import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Leaf,
  Globe,
  TruckIcon,
  BarChart3,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/image-curosal";
import MissionVision from "@/components/mission-vision";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image Carousel */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <ImageCarousel />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Global Trading & Marketing
            <span className="block text-xl md:text-2xl mt-2 font-normal">
              (Pvt) Limited - Sri Lanka
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Exporting premium quality Sri Lankan fruits and vegetables to global
            markets
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MissionVision />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Our Company
              </h2>
              <p className="text-gray-600 mb-6">
                Global Trading & Marketing (Pvt) Limited is a premier exporter
                of fresh fruits and vegetables from Sri Lanka. With decades of
                experience, we have established ourselves as a trusted supplier
                to markets across the globe, with a special focus on Middle
                Eastern countries.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to quality, sustainability, and customer
                satisfaction has made us a preferred partner for international
                buyers seeking the finest Sri Lankan produce.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Premium Quality
                    </h3>
                    <p className="text-sm text-gray-500">
                      Handpicked fresh produce
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Global Reach</h3>
                    <p className="text-sm text-gray-500">
                      Exporting to 15+ countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Sri Lankan farm"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Premium Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We export a wide variety of fresh, high-quality fruits and
              vegetables grown in the fertile lands of Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-64 relative">
                <Image
                  src="/img/fruit.jpg?height=400&width=600"
                  alt="Tropical Fruits"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Fresh Fruits
                </h3>
                <p className="text-gray-600">
                  Mangoes, pineapples, papayas, and other exotic fruits
                  harvested at peak ripeness.
                </p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-64 relative">
                <Image
                  src="/img/vegetables.jpg?height=400&width=600"
                  alt="Fresh Vegetables"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Fresh Vegetables
                </h3>
                <p className="text-gray-600">
                  Organic vegetables including bell peppers, tomatoes, and leafy
                  greens.
                </p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-64 relative">
                <Image
                  src="/img/coconut.jpg?height=400&width=600"
                  alt="Spices & Herbs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Coconuts
                </h3>
                <p className="text-gray-600">
                  Fresh Sri Lankan coconuts known for their sweet water and creamy flesh, perfect for both consumption and processing.
                </p>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-64 relative">
                <Image
                  src="/img/star-anise.jpg?height=400&width=600"
                  alt="Spices & Herbs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Spices
                </h3>
                <p className="text-gray-600">
                  Premium Sri Lankan spices and herbs known for their
                  exceptional aroma and flavor.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Request Product Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Farms Section */}
      <section id="farms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Farms & Facilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with carefully selected farms across Sri Lanka to ensure
              the highest quality produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Farm in Sri Lanka"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Sustainable Farming
                </h3>
                <p className="text-white/80">
                  Environmentally friendly practices that preserve our natural
                  resources
                </p>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Packing facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">
                  Modern Packing Facilities
                </h3>
                <p className="text-white/80">
                  State-of-the-art processing and packaging to maintain
                  freshness
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-green-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Our Quality Commitment
            </h3>
            <p className="text-gray-600 mb-6">
              Every piece of fruit and vegetable we export undergoes rigorous
              quality checks to ensure it meets international standards. Our
              farms follow Good Agricultural Practices (GAP) and our facilities
              are HACCP certified.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                ISO 22000 Certified
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                HACCP Compliant
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                Global GAP
              </div>
              <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                Organic Certified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end solutions for the export of fresh produce
              from Sri Lanka to global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <TruckIcon className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Logistics & Shipping
              </h3>
              <p className="text-gray-600">
                Complete logistics solutions including cold chain management,
                documentation, and shipping to ensure your produce arrives
                fresh.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Market Analysis
              </h3>
              <p className="text-gray-600">
                Detailed market insights and trend analysis to help you make
                informed decisions about product selection and timing.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Custom Packaging
              </h3>
              <p className="text-gray-600">
                Tailored packaging solutions that maintain product freshness
                while showcasing your brand identity.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Experienced team with deep industry knowledge
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Reliable supply chain with contingency planning
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Competitive pricing with volume discounts
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Strict quality control at every stage
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Transparent communication throughout the process
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Customized solutions for your specific needs
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how we can meet your fresh produce
            needs.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Contact Us <Phone className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
