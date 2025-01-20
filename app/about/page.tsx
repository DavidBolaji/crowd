import { HeroSection } from '@/app/_components/screens/hero-section'
import ManagementSection from '@/app/_components/screens/management'
import TrustedSection from '@/app/_components/screens/trusted'
import WhySection from '@/app/_components/screens/why'
import React from 'react'
import Sec1 from '@/public/sec.jpg'

const AboutPage = () => {
    const heroWithButtons = {
        content: {
            title: "About Us",
            description: "The event security and staffing company delivering world-class solutions since 2009.",
        },
        imageSrc: Sec1,
        imageAlt: "Security personnel managing event entry",
        imageOnRight: true,
    }
    return (
        <main>
            {/* Example with buttons */}
            <HeroSection {...heroWithButtons} />
            <TrustedSection />
            <WhySection />
            <ManagementSection />
        </main>
    )
}

export default AboutPage
