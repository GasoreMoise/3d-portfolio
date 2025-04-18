import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel"
//import HatModel from "@/components/models/HatModel"
import AboutDetails from "@/components/about"
import dynamic from "next/dynamic"

const HatModel = dynamic(() => import("@/components/models/HatModel"), {ssr: false})
export default function Home() {
  return (
    <>
      <Image src={bg} 
      priority sizes="100vw"
      alt="background-image"  className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />
      

      

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2  -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute flex flex-col items-center text-center top-3/4 sm:top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="text-xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold text-accent">GASORE NSHUTI Moise</h1>
        <p className="font-light text-foreground text-lg">Meet the wizard behind all this magic</p>
      </div>
      </div>

      <AboutDetails />
    </>
  );
}
