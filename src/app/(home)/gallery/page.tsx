"use client"

import { useState } from "react"
import Image from "next/image"

import Sidebar from "@/components/Sidebar"
import { titles } from "@/data/homePage"
import dummyImage from "@/assets/food.jpg"

export default function Home() {
    const sideBarContent = Array.from(Array(10).keys()).map((n) => {
        return (n + 1).toString().padStart(2, "0") + "."
    })

    const [activeContent, setActiveContent] = useState(0)

    const changeContent = (index: number) => {
        setActiveContent(index)
    }

    return (
        <section className="flex gap-32 mt-16">
            <Sidebar content={sideBarContent} changeContent={changeContent} activeContent={activeContent} />

            <main className="w-100 grid grid-cols-3">
                <section className="col-span-2 flex flex-col">
                    <h1 className="text-3fluid">{titles[activeContent]}</h1>

                    <div className="mt-auto flex items-end gap-14">
                        <Image
                            src={dummyImage}
                            alt="image"
                            width={200}
                            height={200}
                        />

                        <span className="text-sm">
                            Some Random Text, <br /> with same description.
                        </span>
                    </div>
                </section>

                <section className="col-span-1 text-fluid">
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam voluptas dolorum ipsum veritatis fugiat.
                        Reprehenderit sint nesciunt, consectetur dolore omnis
                        tempora incidunt, eius eum temporibus, mollitia aliquam
                        totam dicta illo.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam voluptas dolorum ipsum veritatis fugiat.
                        Reprehenderit sint nesciunt, consectetur dolore omnis
                        tempora incidunt, eius eum temporibus, mollitia aliquam
                        totam dicta illo.
                    </p>
                </section>
            </main>
        </section>
    )
}
