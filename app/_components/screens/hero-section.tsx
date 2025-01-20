"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/app/_lib/utils"

interface HeroButton {
  text: string
  href: string
}

interface HeroContent {
  title: string
  description: string
  buttons?: HeroButton[]
}

interface HeroSectionProps {
  content: HeroContent
  imageSrc: string | StaticImageData
  imageAlt: string
  imageOnRight?: boolean
  className?: string
}

export function HeroSection({ content, imageSrc, imageAlt, imageOnRight = true, className }: HeroSectionProps) {
  const ContentSection = () => (
    <div className="relative flex flex-col justify-center space-y-6 px-6 py-12 lg:px-12 xl:px-16  text-white text-left z-10">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{content.title}</h1>
      <p className="max-w-[600px] uppercase text-lg sm:text-xl md:text-2xl">{content.description}</p>
      {content.buttons && content.buttons.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {content.buttons.map((button, index) => (
            <Button 
            key={index} 
            asChild 
            className="font-black text-xl py-8 px-6 bg-white/30 backdrop-blur-lg text-white border border-white/20 rounded-lg shadow-md transition-all hover:bg-white/20 hover:shadow-lg"
            variant={index === 0 ? "default" : "outline"} 
            size="lg"
          >
            <Link href={button.href}>{button.text}</Link>
          </Button>
          ))}
        </div>
      )}
    </div>
  )

  const ImageSection = () => (
    <div className="relative hidden md:block h-[400px] w-full lg:h-full">
      <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
    </div>
  )

  return (
    <section className={cn("relative grid bg-red-600 min-h-[600px] w-full lg:grid-cols-2 overflow-hidden", className)}>
      {imageOnRight ? (
        <>
          {/* Slanted Background */}
          <div className="relative flex items-center">
            <div className="absolute translate-x-1/2 ml-4 z-10 bg-red-600 clip-slant inset-0"></div>
            <ContentSection />
          </div>
          <ImageSection />
        </>
      ) : (
        <>
          <ImageSection />
          <div className="relative flex items-center">
            <div className="absolute z-10 bg-red-600 inset-0 -translate-x-1/2 clip-slant-2"></div>
            <ContentSection />
          </div>
        </>
      )}
    </section>
  )
}
