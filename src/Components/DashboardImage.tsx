"use clinet";
"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import dashboardImage from "../public/contentTura-Dashboard.png"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
            Unleash the Power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Social Media Content Creation with AI!
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={dashboardImage}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

