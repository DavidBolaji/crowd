"use client"
import React from 'react'
import Wrapper from '../ui/wrapper'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { ArrowBigRight } from 'lucide-react'
import { cardData } from '@/app/_lib/data'
import Link from 'next/link'



const CustomCard: React.FC<{ url: string, title: string, desc: string, link: string }> = ({
    url,
    title,
    desc,
    link
}) => {
  
    return (
        <Card className='bg-black border-none rounded-none shadow-2xl'>
            <CardHeader className='relative h-56'>
                <Image src={url} fill className='absolute w-full h-full object-cover' alt={title} />
            </CardHeader>
            <CardContent>
                <CardTitle className='my-6 font-black uppercase text-2xl text-slate-100 italic'>{title}</CardTitle>
                <CardDescription className='text-slate-100 mb-4 text-lg'>{desc}</CardDescription>
            </CardContent>
            <CardFooter>
                <Link href={link} className='text-white font-black mr-2 text-lg italic uppercase'>Learn More</Link>
                <span className='bg-primary rounded-full flex items-center justify-center'>
                    <ArrowBigRight color='white' />
                </span>
            </CardFooter>
        </Card>
    )
}



const ManagementSection = () => {
    return (
        <div className='bg-stone-300 py-20'>
            <Wrapper>
                <h2 className='font-black lg:max-w-3xl mx-auto mb-8 uppercase md:text-4xl text-3xl text-center italic'>WE PROVIDE END-TO-END EVENT MANAGEMENT SERVICES</h2>
                <p className='text-center text-xl mx-auto max-w-5xl'>Our team excels in tailoring services to seamlessly align with the needs and requirements of your events, ensuring a perfect fit every time.</p>
                <div className='grid grid-cols-9 gap-10 mt-14'>
                    {cardData.map(card => (
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

export default ManagementSection
