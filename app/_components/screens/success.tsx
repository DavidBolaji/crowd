"use client"
import React from 'react'
import Wrapper from '../ui/wrapper'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

import Image from 'next/image'
import { ArrowBigRight } from 'lucide-react'
import { cardData2 } from '@/app/_lib/data'
import Link from 'next/link'



const CustomCard: React.FC<{ url: string, title: string, desc: string, link: string }> = ({
    url,
    title,
    desc,
    link
}) => {
    return (
        <Card className='bg-white border-none rounded-none shadow-2xl'>
            <CardHeader className='relative h-56'>
                <Image src={url} fill className='absolute w-full h-full object-cover' alt={title} />
            </CardHeader>
            <CardContent>
                <CardTitle className='my-6 font-black uppercase text-2xl text-black italic'>{title}</CardTitle>
                <CardDescription className='text-black mb-4 text-lg'>{desc}</CardDescription>
            </CardContent>
            <CardFooter>
                <Link href={link} className='text-black font-black mr-2 text-lg italic uppercase'>READ More</Link>
                <span className='bg-primary rounded-full flex items-center justify-center'>
                    <ArrowBigRight color='white' />
                </span>
            </CardFooter>
        </Card>
    )
}



const SuccessSection = () => {
    return (
        <div className='bg-stone-300 py-20'>
            <Wrapper>
                <h2 className='font-black mx-auto mb-8 uppercase md:text-4xl text-3xl italic'>Success stories</h2>
                
                <div className='grid grid-cols-9 gap-10 mt-14'>
                    {cardData2.map(card => (
                        <div key={card.id} className='md:col-span-3 col-span-9'>
                            <CustomCard
                                url={card.url}
                                desc={card.desc}
                                title={card.title}
                                link={card.href}
                            />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default SuccessSection
