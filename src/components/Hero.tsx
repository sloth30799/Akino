"use client"

import { useEffect } from "react"
import anime from "animejs"

import Image from "next/image"
import hero from "@/assets/images/hero.png"

const Hero = () => {
    useEffect(() => {
        anime({
            targets: ".inspire-underline",
            width: "200",
            easing: "linear",
            duration: 1000,
        })
    }, [])

    return (
        <section className="mt-3 border-t border-black">
            <h1 className="my-4 font-semibold text-center text-4fluid">
                Minimal interiors
            </h1>

            <div className="grid grid-cols-5 gap-[60px] mt-[60px]">
                <div className="flex flex-col items-start h-full col-span-2 gap-3">
                    <h4 className="text-lg font-bold">COOL TITLE</h4>

                    <p className="text-sm indent-10 text-fluid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, in ratione, numquam ut odio at totam praesentium
                        eaque iste facilis officia ipsa placeat, quod iusto?
                        Omnis commodi eaque asperiores nulla!
                    </p>
                    <p className="text-sm indent-10 text-fluid">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequuntur, ea ratione laborum blanditiis magni
                        harum, quis aliquid saepe accusantium a similique! Sunt
                        omnis eveniet atque veniam aliquam ducimus doloremque
                        ad.
                    </p>

                    <span className="mt-auto text-sm text-black">
                        GET INSPIRED BY SOMEONE
                        <div className="w-0 mt-2 h-[1px] bg-black inspire-underline"></div>
                    </span>
                </div>
                <div className="relative h-[60vh] col-span-2">
                    <Image
                        src={hero}
                        alt="hero-image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col h-full col-span-1 pb-6">
                    <div className="flex items-end gap-12 mt-auto text-xs">
                        <div>
                            <h6 className="font-bold">01 - 07</h6>
                            <span>
                                Use arrows or <br />
                                drag image to navigate
                            </span>
                        </div>

                        <div className="flex gap-3 text-lg">
                            <span className="text-gray-300 cursor-pointer">{"<"}</span>
                            <span className="cursor-pointer">{">"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
