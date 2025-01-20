"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Menu } from "lucide-react"
import { navLinks, whatsapp } from "@/app/_lib/data"
import { Button } from "./button"
import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function MobileDrawer() {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState<string | null>(null); // Track open submenu state
    const [isOpen, setIsOpen] = useState<boolean>(false); // Track main menu open state

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu size={50} className="scale-125" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent side="top" className="w-full h-screen bg-black text-white p-0">
                <div className="flex flex-col h-full">
                    <div className="flex flex-col space-y-4 p-6 pt-20 relative">
                        <AnimatePresence mode="wait">
                            {openMenu ? (
                                // 🟢 Submenu View with Animation
                                <motion.div
                                    key="submenu"
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute inset-0 p-6 bg-black space-y-5"
                                >
                                    <button 
                                        onClick={() => setOpenMenu(null)}
                                        className="flex items-center space-x-2 text-lg font-bold mb-4"
                                    >
                                        <ChevronLeft className="h-5 w-5 -ml-2 text-gray-400" />
                                        <span>Back</span>
                                    </button>

                                    {navLinks.find(link => link.link === openMenu)?.children?.map((child, index) => (
                                        <div key={`${child.link}-${index}`} className="border-b border-gray-800 pb-4">
                                            <Link 
                                                href={child.href} 
                                                className="text-lg font-bold uppercase block" 
                                                onClick={() => {
                                                    setOpenMenu(null);
                                                    setIsOpen(false); // Close main menu
                                                }}
                                            >
                                                {child.link}
                                            </Link>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                // 🔵 Main Menu View with Animation
                                <motion.div
                                    key="mainmenu"
                                    initial={{ x: 0 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "-100%" }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="space-y-5"
                                >
                                    {navLinks.map((link, index) => (
                                        <div key={`${link.link}-${index}`} className="border-b border-gray-800 pb-4">
                                            <div className="flex items-center justify-between">
                                                {link.children?.length > 0 ? (
                                                    <button 
                                                        className="text-lg font-bold uppercase flex items-center w-full justify-between"
                                                        onClick={() => setOpenMenu(link.link)}
                                                    >
                                                        {link.link}
                                                        <ChevronRight className="h-5 w-5 text-gray-400" />
                                                    </button>
                                                ) : (
                                                    <Link 
                                                        href={link.href as string} 
                                                        className="text-lg font-bold uppercase block"
                                                        onClick={() => setIsOpen(false)} // Close main menu
                                                    >
                                                        {link.link}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* 📞 Contact */}
                                    <div className="pt-4">
                                        <Link href="tel:1-855-456-0205" className="text-lg font-bold">
                                            1-855-456-0205
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 🔴 Footer Button */}
                    <div className="mt-auto p-6 space-y-4">
                        <Button 
                            onClick={() => {
                                router.push(`https://wa.me/${whatsapp}`);
                                setIsOpen(false); // Close main menu
                            }} 
                            className="w-full bg-primary border-primary text-white rounded-none uppercase font-bold"
                        >
                            Talk To An Expert
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
