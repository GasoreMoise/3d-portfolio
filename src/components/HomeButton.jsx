"use client"
import React from "react";
import Link from "next/link";
import {Home} from "lucide-react"
import { motion } from 'framer-motion'



const NavLink = motion(Link);

const HomeBtn = () => {
    return (
        <NavLink 
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{delay: 1}}
        
        href={"/"} target={'_self'} className='text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50' 
        aria-label={"home"} name={"home"}>
            <span className='relative w-14 h-14 p-4 hover:text-accent'>
                <Home className="w-full h-full " strokeWidth={1.5}/>

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>

                
                <span className='absolute hidden rounded-full peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm shadow-lg whitespace-nowrap'>
                    Home
                </span>
            </span>

        </NavLink>
    )
}

export default HomeBtn;