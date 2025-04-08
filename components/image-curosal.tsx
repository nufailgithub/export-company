"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ImageCarousel() {
  const images = [
    {
      src: "/img/fruit.jpg?height=1080&width=1920&text=Fresh+Fruits",
      alt: "Fresh fruits from Sri Lanka",
    },
    {
      src: "/img/tomatoes.jpg?height=1080&width=1920&text=Vegetables",
      alt: "Premium vegetables",
    },
    {
      src: "/img/vegetables.jpg?height=1080&width=1920&text=Spices",
      alt: "Sri Lankan spices",
    },
    {
      src: "/img/zucchinis.jpg?height=1080&width=1920&text=Farms",
      alt: "Our sustainable farms",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute inset-0 z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover brightness-[0.7]"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}
