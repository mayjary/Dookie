import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NavigationMenuDemo } from "./navbar";
import { Component } from "@/components/chat";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { GlobeDemo } from "./glob";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <NavigationMenuDemo />
    </div>
    <Component></Component>
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
       
        src={`https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg`}
        showGradient={false}
      />
    </div>
        <GlobeDemo></GlobeDemo>


    </>
  );
}