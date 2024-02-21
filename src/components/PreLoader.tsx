"use client"

import { useEffect, ReactNode, useState } from "react"
import anime from "animejs"

import Image from "next/image"
import loader1 from "@/assets/images/loader-1.jpg"
import loader2 from "@/assets/images/loader-2.jpg"
import loader3 from "@/assets/images/beaver-backpack1.png"
import loader4 from "@/assets/images/beaver-backpack2.png"
import loader5 from "@/assets/images/beaver-backpack3.png"

type LoaderProps = {
    children: ReactNode
}

const PreLoader = ({ children }: LoaderProps) => {
    const [loader, setLoader] = useState(false)

    const images = [
        { image: loader1, x: -320, y: 140 },
        { image: loader2, x: 0, y: 0 },
        { image: loader3, x: -260, y: -160 },
        { image: loader4, x: 250, y: -120 },
        { image: loader5, x: 200, y: 170 },
    ]

    useEffect(() => {
        const loaderAnimation = anime.timeline({
            easing: "easeInOutQuad",
            complete: () => setLoader(false)
        });

        // Get all .loader-img elements
        const loaderImages = document.querySelectorAll('.loader-img');

        loaderImages.forEach((element, index) => {
            loaderAnimation.add({
                targets: element,
                keyframes: [
                    {
                        translateX: (el: { getAttribute: (arg0: string) => number }) => {
                            const dataX = el.getAttribute("data-x");
                            return [dataX, dataX];
                        },
                        translateY: (el: { getAttribute: (arg0: string) => number }) => {
                            const dataY = el.getAttribute("data-y");
                            const endValue = Number(dataY) - 20;
                            return [dataY, endValue];
                        },
                        opacity: 0.9,
                        duration: 700,
                    },
                    {
                        opacity: 1,
                        duration: 500,
                    },
                ],
                delay: index * 200, // Adjust the delay for each element
            });
        });

        loaderAnimation.play()

        return () => {
            loaderAnimation.pause() // Pause animation before component unmounts
            loaderAnimation.seek(0) // Reset animation to its initial state
        }
    }, [])

    if(!loader) return children

    return (
        <section className="flex justify-center items-center w-screen h-screen">
            <div className="loader-container">
                {images.map((img, i) => (
                    <Image
                        key={i}
                        alt="loader"
                        src={img.image}
                        data-x={img.x}
                        data-y={img.y}
                        className="loader-img opacity-0"
                    />
                ))}
            </div>
        </section>
    )
}

export default PreLoader
