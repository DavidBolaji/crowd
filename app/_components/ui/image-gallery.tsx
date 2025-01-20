'use client'

import * as React from "react"
import Image, { StaticImageData } from "next/image"
import { ArrowBigDown, ArrowBigRight, ChevronLeft, ChevronRight } from 'lucide-react'

import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/app/_lib/utils"
import { Button } from "./button"

import Sec1 from '@/public/sec.jpg'
import Sec2 from '@/public/sec2.png'
import Sec3 from '@/public/sec3.jpg'
import { whatsapp } from "@/app/_lib/data"
import { useRouter } from "next/navigation"


interface ImageGalleryProps {
  images?: (string | StaticImageData)[]
  title?: string
  className?: string
}

export default function ImageGallery({
  images = [],
  title = "Gallery",
  className
}: ImageGalleryProps) {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const defaultImages = [Sec1, Sec2, Sec3]
  const carouselText = [
    {
      title: "Crowd management and event security",
      desc: "BEST ensures a safe and successful experience for your guests with our event security services."
    }

  ]
  const displayImages = images.length > 0 ? images : defaultImages

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext()
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className={cn("w-full relative", className)}>
      {/* Mobile View */}
      <div className="absolute w-full h-full bg-black/50 z-10" />
      <div className="text-center md:max-w-5xl max-w-sm  mx-auto absolute -translate-x-1/2 -translate-y-1/4  z-10 top-1/2 left-1/2 w-full h-full">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white text-2xl md:text-6xl italic uppercase font-extrabold">
          {carouselText[0]?.title}
        </h2>
        <hr className="md:max-w-96 max-w-56 md:my-12 my-6 bg-primary leading-6 h-2 border-primary  mx-auto" />
        <p className="text-white leading-relaxed uppercase mx-auto max-w-lg italic font-bold">{carouselText[0]?.desc}</p>
        <div className="flex md:flex-row flex-col items-center gap-x-3 mt-4 justify-center">
          <p className="text-white font-bold">Discover our services</p>
          <ArrowBigRight color="white" className="md:block hidden" size={24} />
          <ArrowBigDown color="white" className="md:hidden block" size={24} />
          <Button onClick={() => router.push(`https://wa.me/${whatsapp}`)} className="rounded-none uppercase font-black">Talk to An expert</Button>
        </div>
      </div>
      <div className="relative group w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {displayImages.map((image, index) => (
            <div key={index}
              className={cn(
                "flex-[0_0_100%] inset-0"
              )}
            >
              <div className="relative min-h-[80vh] w-full">
                <Image
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  fill
                  priority
                  className="object-cover w-full h-full"
                />
              </div>

            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {displayImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                currentSlide === index ? "bg-primary" : "bg-white/50"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0  hidden md:flex transition-opacity">

          <Button
            size="icon"
            variant="ghost"
            className="absolute z-30 left-8 md:left-28 top-1/2 rounded-full -translate-y-1/4 bg-primary backdrop-blur-sm hover:bg-primary/90"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft color="white" className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="absolute z-30 right-8 md:right-28 top-1/2 rounded-full -translate-y-1/2 bg-primary backdrop-blur-sm hover:bg-primary/90"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight color="white" className="h-4 w-4" />
          </Button>

        </div>
      </div>

    </div>
  )
}
