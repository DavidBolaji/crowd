import { HeroSection } from '@/app/_components/screens/hero-section'
import ManagementSection from '@/app/_components/screens/management'
import TrustedSection from '@/app/_components/screens/trusted'
import WhySection from '@/app/_components/screens/why'
import { whatsapp } from '@/app/_lib/data'
import React from 'react'

const EventStaffingPage = () => {
    const heroWithButtons = {
        content: {
            title: "EVENT STAFFING",
            description: "Our event staffing services provide the support you need, from parking attendants to event staff security and more",
            buttons: [
                {
                    text: "TALK TO AN EXPERT",
                    href: `https://wa.me/${whatsapp}`,
                },
            ],
        },
        imageSrc: "https://best.garda.com/sites/default/files/styles/rectangular/public/2023-01/event-management-services-event-staffing.jpg",
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

export default EventStaffingPage
