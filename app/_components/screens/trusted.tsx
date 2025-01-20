"use client"
import React from 'react'
import Wrapper from '../ui/wrapper'
import useEmblaCarousel from "embla-carousel-react"
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImagesList } from '@/app/_lib/data'
import { cn } from '@/app/_lib/utils'
import Image from 'next/image'

const TrustedSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (emblaApi) {
                emblaApi.scrollNext()
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [emblaApi])
    return (
        <div className='bg-white my-20 relative'>
            <Wrapper>
                <h2 className='font-black md:text-4xl text-3xl text-center italic'>TRUSTED BY OUR CLIENTS & PARTNERS</h2>
                <div className="relative group w-full overflow-hidden" ref={emblaRef}>
                    <div className="flex items-center md:mt-8 -mt-5 md:gap-16">
                        {ImagesList.map((image, index) => (
                            <div key={`${index}_${image.url}`}
                                className={cn(
                                    "md:flex-[0_0_10%] flex-[0_0_100%] "
                                )}
                            >
                                <div className="relative hidden md:flex items-center w-full">
                                    <Image
                                        src={image.url}
                                        alt={`${image.url} image ${index + 1}`}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="relative items-center md:hidden flex w-full">
                                    <Image
                                        src={image.url}
                                        alt={`${image.url} image ${index + 1}`}
                                        width={100}
                                        height={100}
                                        className="object-cover p-24 w-full h-full"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>


                </div>
                <div className="absolute top-14 overflow-hidden inset-0 flex transition-opacity">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute z-30 left-8 md:left-14 top-1/2 rounded-full -translate-y-1/4 backdrop-blur-sm hover:bg-transparent"
                        onClick={() => emblaApi?.scrollPrev()}
                    >
                        <ChevronLeft color="grey" className="h-4 w-4 scale-[7]" />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute z-30 right-8 md:right-14 top-1/2 rounded-full -translate-y-1/2 backdrop-blur-sm hover:bg-transparent"
                        onClick={() => emblaApi?.scrollNext()}
                    >
                        <ChevronRight color="grey" className="h-4 w-4 scale-[7]" />
                    </Button>

                </div>
            </Wrapper>

        </div>
    )
}

export default TrustedSection
