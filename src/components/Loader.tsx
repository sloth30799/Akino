"use client"

import { useEffect } from "react"
import anime from "animejs"

const Loader = () => {
    const circles = [
        { x: -300, y: -200 },
        { x: 350, y: -220 },
        { x: -450, y: 180 },
        { x: 400, y: 140 },
    ]

    useEffect(() => {
        anime({
            targets: ".loader-circle",
            keyframes: [
                {
                    translateX: (el: {
                        getAttribute: (arg0: string) => number
                    }) => {
                        return el.getAttribute("data-x")
                    },
                    translateY: (el: {
                        getAttribute: (arg0: string) => number
                    }) => {
                        return el.getAttribute("data-y")
                    },
                    duration: 100,
                },
                {
                    opacity: 1,
                    width: anime.stagger(70, { start: 150 }),
                    duration: 1000,
                },
                {
                    opacity: 0,
                    duration: 500,
                },
            ],
            easing: "easeInOutSine",
            complete: () => {
                anime({
                    targets: ".loader-border",
                    keyframes: [
                        { scale: 1.2, duration: 1000 },
                        { opacity: 0, duration: 1000 },
                    ],
                    easing: "easeInOutSine",
                })
            },
        })
    }, [])

    return (
        <section className="flex items-center justify-center w-screen h-screen overflow-hidden">
            <div className="loader-border w-[400px] h-[400px] border-black border-[20px] rounded-full">
                {circles.map((c, i) => (
                    <div
                        data-x={c.x}
                        data-y={c.y}
                        className="border border-gray-300 rounded-full opacity-0 loader-circle aspect-square"
                        key={i}
                    ></div>
                ))}
            </div>
        </section>
    )
}

export default Loader
