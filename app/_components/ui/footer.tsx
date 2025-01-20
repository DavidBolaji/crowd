
import Image from "next/image";
import React from "react";

import Link from "next/link";
import Logo from '@/public/logo.png'
import Wrapper from "./wrapper";
import { footerNav, socials } from "@/app/_lib/data";



export const Footer = () => {
  return (
    <div className="pt-16 bg-black md:px-0">
      <Wrapper>
        <div className="px-4">


          <div className="grid md:grid-cols-10 grid-cols-2 gap-x-4">
            <div className="col-span-2 md:mb-0 mb-10">
              <Image
                priority
                src={Logo}
                alt="EranPro logo"
                width={120}
                height={40}
                className="mb-2"
              />
              {socials.length ? (
                  <div className="flex gap-4 md:ml-1 ml-1 mt-5 md:mb-0">
                    {socials.map((social, index) => (
                      <span key={`${index}_social`} className="">{social.icon}</span>
                    ))}
                  </div>
                ): null}
            </div>
            {footerNav.map((foot) => (
              <div key={foot.title} className="col-span-2 md:mb-0 mb-10">

                {foot.navs.map((nav) => (
                  <p
                    className="text-[16px] font-light leading-5 pb-4 text-white"
                  >
                    {nav.name}
                  </p>
                ))}
                
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <div className="bg-grey-200 py-8 md:px-20 px-4">
        <div className="flex md:flex-row flex-col justify-center items-center">
          
          <div className="flex text-white items-center gap-x-4">
            <Link href={"#"} className="font-bold font-satoshi text-sm">
              Cookie Policy
            </Link>
            <Link href={"#"} className="font-bold border-x-2 px-4 font-satoshi text-sm">
              Terms of Service
            </Link>
            <Link href={"#"} className="font-bold font-satoshi text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
