"use client"

import * as React from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { navLinks, whatsapp } from "@/app/_lib/data";
import Wrapper from "./wrapper";
import { Button } from "./button";
import Link from "next/link";
import Logo from '@/public/logo.png'
import Image from "next/image";
import { MobileDrawer } from "./mobile-drawer";
import { useRouter } from "next/navigation";


export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-x-6">
                {navLinks?.map(link => (
                    <NavigationMenuItem className="relative group" key={link.link}>
                        <NavigationMenuTrigger className="uppercase group-hover:border-b pb-5 italic font-black mt-2">{link.link}</NavigationMenuTrigger>
                        {link?.children?.length > 0 ? <NavigationMenuContent>
                            <ul className="absolute group flex flex-col w-[200px] gap-3 px-6 pb-8 pt-10 bg-black " >
                                {link.children.map(childLink => (
                                    <Link className="hover:text-primary" key={childLink.link} href={childLink.href}>
                                        {childLink.link}
                                    </Link>
                                ))}
                            </ul>
                        </NavigationMenuContent> : null}

                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}


const Navbar = () => {
    const router = useRouter();
    return (
        <nav className="bg-black sticky z-50 top-0 text-white font-bold">
            <Wrapper>
                <div className="md:flex hidden justify-end items-center h-20 gap-x-4">
                    <span>1-674-543-0297</span>
                    {/* <Button variant={'outline'} className="bg-transparent border-primary text-white rounded-none uppercase font-bold">Careers</Button> */}
                </div>
                <div className="w-full flex h-20 lg:h-16 justify-between">
                    <Link href={'/'}>
                        <div className="text-white -translate-x-6 md:-translate-x-0 md:-translate-y-4 flex items-center">
                            <Image src={Logo} alt="logo" className="" width={150} height={150} priority />
                        </div>
                    </Link>
                    <div className="hidden md:block">
                        <NavigationMenuDemo />
                    </div>
                    <div className="hidden md:block">
                        <Button onClick={() => router.push(`https://wa.me/${whatsapp}`)} className="bg-primary border-primary text-white rounded-none uppercase font-bold">Talk To An Expert</Button>
                    </div>
                    <div className="flex items-center md:hidden">
                        <MobileDrawer />
                    </div>
                </div>
            </Wrapper>
        </nav>
    )
}

export default Navbar

