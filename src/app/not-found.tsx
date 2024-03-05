import notFoundImage from "@/assets/svg/404.svg"

import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
	return (
		<section className="h-screen w-screen flex justify-center items-center">
			<div className="flex flex-col items-center space-y-3">
				<Image src={notFoundImage} alt="not-found" width={250} />
				<div>
					<h3 className="text-xl font-semibold">Page Not Found</h3>
					<div className="h-1 w-12 bg-black mx-auto"></div>
				</div>
				<p>
					🍣 Page missing! Chefs on the case. Thanks for waiting! 🥢
				</p>
				<Link href='/' className="bg-black p-4 text-white text-xs">
					Back to Home
				</Link>
			</div>
		</section>
	)
}
