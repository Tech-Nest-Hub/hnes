"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const carouselItems = [
  {
    title: "Welcome to Our Platform",
    description: "Discover amazing opportunities and experiences",
    image: "https://v0.dev/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Learn and Grow",
    description: "Access world-class education resources",
    image: "https://v0.dev/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Join Our Community",
    description: "Connect with like-minded individuals",
    image: "https://v0.dev/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Achieve Excellence",
    description: "Reach your full potential with our support",
    image: "https://v0.dev/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Start Your Journey",
    description: "Begin your path to success today",
    image: "https://v0.dev/placeholder.svg?height=600&width=1200",
  },
]

export function HeroSectionCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [plugin] = React.useState(() => 
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    
    api.on("select", onSelect)
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="relative w-full">
      {/* Full-width carousel */}
      <Carousel
        plugins={[plugin]}
        className="w-full"
        onMouseEnter={plugin.stop}
        onMouseLeave={plugin.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[600px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 h-12 w-12 z-20" />
        <CarouselNext className="right-6 h-12 w-12 z-20" />
      </Carousel>

      {/* Dynamic overlay text based on current slide */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center uppercase tracking-wider">
          {carouselItems[current].title}
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl">
          {carouselItems[current].description}
        </p>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="flex justify-center gap-3">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === current ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}