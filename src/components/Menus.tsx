"use client"

import anime from "animejs"
import { useState } from "react"

const Menus = () => {
    const [activeTab, setActiveTab] = useState(0)

    const menus = [
        {
            mealTime: "Breakfast",
            description:
                "Start your day right with our hearty breakfast option. Enjoy a delicious plate of scrambled eggs, crispy bacon, and golden toast.",
        },
        {
            mealTime: "Lunch",
            description:
                "Join us for a satisfying lunch experience. Indulge in our savory grilled chicken sandwich, perfectly paired with a crisp garden salad.",
        },
        {
            mealTime: "Dinner",
            description:
                "Treat yourself to a delightful dinner with our chef's special pasta dish. Savour the rich flavors of spaghetti in our homemade marinara sauce, served with warm garlic bread.",
        },
    ]

    const changeTab = (index: number) => {
        setActiveTab(index)

        const tabName = menus[index].mealTime

        const tabs = document.querySelector(".tabs")
        const tabsLeft = tabs?.getBoundingClientRect().left as number

        const tab = document.querySelector(`.${tabName}-tab`)
        const activeTabBoundingClient = tab?.getBoundingClientRect()
        const activeTabLeft = activeTabBoundingClient?.left as number

        const walk = activeTabLeft - tabsLeft

        anime({
            targets: ".active-bar",
            translateX: walk,
            width: activeTabBoundingClient?.width,
            duration: 1000,
            easing: "easeInOutQuad",
        })
    }

    return (
        <section className="grid grid-cols-5">
            <div className="col-span-3 p-12 flex flex-col gap-6 justify-center">
                <div>
                    <h2 className="text-2fluid font-black">WE SUPPLY,</h2>
                    <h2 className="text-2fluid font-black">YOU BUILD,</h2>
                    <h2 className="text-2fluid font-black">WE GUIDE</h2>
                    <button className="bg-black mt-12 py-6 px-6 text-white text-xs">
                        {"Here's how it works"}
                    </button>
                </div>

                <div className="flex flex-col gap-10 mt-12 w-[60%]">
                    <div className="tabs flex justify-between my-6 border-t border-gray-400">
                        {menus.map((m, index) => (
                            <div key={m.mealTime} className="flex flex-col">
                                {index === 0 && (
                                    <div className="w-full border-t-2 border-black active-bar"></div>
                                )}
                                <h6
                                    className={`${
                                        m.mealTime
                                    }-tab px-6 pt-3 cursor-pointer font-medium hover:text-black text-sm ${
                                        activeTab === index
                                            ? "text-black"
                                            : "text-slate-500"
                                    }`}
                                    onClick={() => changeTab(index)}
                                >
                                   | {m.mealTime}
                                </h6>
                            </div>
                        ))}
                    </div>

                    <p className="text-fluid text-slate-500 tracking-normal">
                        {menus[activeTab].description}
                    </p>
                </div>
            </div>
            <div className="col-span-2 w-[100%] bg-black h-screen"></div>
        </section>
    )
}

export default Menus
