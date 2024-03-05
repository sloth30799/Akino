"use client"

import triangleIcon from "@/assets/svg/triangle.svg"

import { ElementRef, useEffect, useRef, useState } from "react"
import anime from "animejs"
import Image from "next/image"

import { milestones } from "@/data"

const Milestones = () => {
	const milestonesRef = useRef<ElementRef<"section">>(null)
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			if (milestonesRef.current) {
				const top = milestonesRef.current.getBoundingClientRect().top
				setScrollPosition(top)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	useEffect(() => {
		if (scrollPosition < 0 && scrollPosition > -580) {
			anime({
				targets: [".char-list"],
				translateY: scrollPosition,
				duration: 0, // Set duration to 0 to instantly apply the translation
			})

			anime({
				targets: ".triangle",
				translateY: (-scrollPosition + 20) / 11,
				rotate: (el: HTMLElement) => {
					return el.getAttribute("data-rotate")
				},
				duration: 0,
			})
		}
	}, [scrollPosition])

	const oneItemHeight = 60
	const activeIndexCondition = Math.floor(-scrollPosition / oneItemHeight)

	const activeTitleCondition = (i: Number): String => {
		if (
			activeIndexCondition === i ||
			(activeIndexCondition >= milestones.length - 1 &&
				i === milestones.length - 1) ||
			(activeIndexCondition < 0 && i === 0)
		) {
			return "text-black"
		} else {
			return "text-amber-400"
		}
	}

	const activeBarCondition = (i: Number): String => {
		if (
			activeIndexCondition === i ||
			(activeIndexCondition >= milestones.length - 1 &&
				i === milestones.length - 1) ||
			(activeIndexCondition < 0 && i === 0)
		) {
			return "w-2 h-[2px] bg-black"
		} else {
			return "w-1.5 h-[2px] bg-gray-200"
		}
	}

	const contextRender = () => {
		if(activeIndexCondition < 0) {
			return milestones[0].context
		} else if (activeIndexCondition > milestones.length - 1) {
			return milestones[milestones.length - 1].context
		} else {
			return milestones[activeIndexCondition].context
		}
	}

	return (
		<section ref={milestonesRef} className="w-full my-3">
			<div className="sticky z-10 top-0 flex flex-col justify-between w-full h-screen">
				<h4 className="py-3 text-2fluid text-center underline underline-offset-2">
					Facts {scrollPosition}
				</h4>
				<div className="flex items-center justify-center h-full">
					<div className="flex justify-between w-full px-3 overflow-hidden h-[300px]">
						<div className="flex self-center gap-1 pt-2">
							<Image
								src={triangleIcon}
								alt="arrow"
								data-rotate={90}
								className="w-3 h-3 -mt-1.5 rotate-90 triangle"
							/>
							<ul className="flex flex-col items-center number-list">
								{milestones.map((c, i) => (
									<li
										key={i}
										className={`mb-1 ml-1 ${activeBarCondition(
											i
										)}`}
									></li>
								))}
							</ul>
						</div>

						<ul className="char-list py-[120px]">
							{milestones.map((c, i) => (
								<li
									key={c.title}
									className={`my-1 text-[40px] font-bold text-center ${activeTitleCondition(
										i
									)}`}
								>
									{c.title}
								</li>
							))}
						</ul>

						<div className="flex self-center gap-1 pt-2">
							<ul className="flex flex-col items-center number-list">
								{milestones.map((c, i) => (
									<li
										key={i}
										className={`mb-1 mr-1 ${activeBarCondition(
											i
										)}`}
									></li>
								))}
							</ul>
							<Image
								src={triangleIcon}
								alt="arrow"
								data-rotate={-90}
								className="w-3 h-3 -mt-1.5 -rotate-90 triangle"
							/>
						</div>
					</div>
				</div>
				<p className="py-3 text-sm text-center">{contextRender()}</p>
			</div>

			{/* scroll height */}
			<div className="sticky top-0 z-0 w-full h-[659px] bg-transparent"></div>
		</section>
	)
}

export default Milestones
