import React from 'react'
import Wrapper from '../ui/wrapper'
import { whyData } from '@/app/_lib/data'
import { Plus } from 'lucide-react'

const WhySection = () => {
    return (
        <div className='bg-black py-20 relative'>
            <Wrapper>
                <h2 className='font-black uppercase md:text-4xl text-3xl text-secondary text-center italic'>WHY CHOOSE BEST CROWD MANAGEMENT</h2>
                <div className='lg:grid grid-cols-12 mt-20 gap-20'>
                    {whyData.map(why => (
                        <div key={why.id} className='md:col-span-3 col-span-6 lg:mb-0 mb-8'>
                            <div className='flex w-full justify-center'>
                                <span className='text-white border-b-8 pb-4 border-primary'>
                                    <span className='text-4xl font-bold'>
                                        {why.count}
                                        <Plus className='inline' />
                                    </span>
                                </span>
                            </div>
                            <p className='text-white flex text-xl justify-center mt-10 text-center mx-auto'>{why.desc}</p>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default WhySection
