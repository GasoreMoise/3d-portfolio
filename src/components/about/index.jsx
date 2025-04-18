"use client"
import React from 'react'
import ItemLayout from './ItemLayout'


const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
            <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                <h2 className="text-xl md:text-2xl text-left w-full capitalize">
                    Architect of Enchantment
                </h2>
                <p className='font-light text-xs sm:text-sm md:text-base'>
                    My Journey in web development is powered by an array of mystical tools and languages, with
                    JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with
                    precision, crafting seamless portals(webistes) that connect realms(users) across the digital universe.
                    The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while
                    my design skills ensure every creation is not only functional but visually captivating. Join me as I
                    continue to explore new spells and technologies to shape the future of the web.
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4'}>
                <p className="font-semibold w-full text-left text-2xl sm:text-5xl text-accent">
                    10+ <sub className="font-semibold text-base">Clients</sub>
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4'}>
               <p className="font-semibold w-full text-left text-2xl sm:text-5xl text-accent">
                    4+ <sub className="font-semibold text-base">Years of Experience</sub>
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                <img className="w-full h-auto"  
                 src="https://github-readme-stats.vercel.app/api/top-langs?username=GasoreMoise&theme=transparent&hide_border=true&show_icons=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="GasoreMoise" loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                <img className="w-full h-auto"  
                 src="https://github-readme-stats.vercel.app/api?username=GasoreMoise&theme=transparent&hide_border=true&show_icons=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="GasoreMoise" loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full'}>
                <img className="w-full h-auto"  
                 src="https://skillicons.dev/icons?i=js,html,css,wasm,aws,babel,bootstrap,cloudflare,css,docker,express,figma,firebase,git,github,githubactions,gitlab,graphql,html,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,postman,python,react,redux,sass,tailwind,ts,vercel,vscode,webpack,wordpress,xd" alt="My Tech Stack" loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
            <a href="https://git.io/streak-stats"><img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=GasoreMoise&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" loading='lazy' /></a>
            </ItemLayout>
            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                <img className="w-full h-auto"  
                 src="https://github-readme-stats.vercel.app/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&show_icons=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="GasoreMoise" loading='lazy' />
            </ItemLayout>



            
        </div>

    </section>
  )
}

export default AboutDetails
