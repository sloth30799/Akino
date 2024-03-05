const Footer = () => {
	const navigationLinks = [
		"Home",
		"Journal",
		"Mystery Ticket",
		"About",
		"Contact",
	]

	const menus = ["Breakfast", "Lunch", "Dinner", "Desert"]

	const policiesAndExternalLinks = [
		"Privacy policy",
		"X(Twitter)",
		"Instagram",
	]

	return (
		<footer className="py-10 bg-black">
			<div className="text-center text-xs tracking-tighter text-slate-500">
				<h6>
					{`"The art of progress is to preserve order amid change and to
					preserve change amid order."`}
				</h6>
				<h6>―Alfred North Whitehead</h6>
			</div>

			<section className="flex justify-center gap-12 my-6">
				<div className="flex flex-col gap-3 font-bold uppercase text-sm">
					{navigationLinks.map((l) => (
						<h5 className="hover:underline cursor-pointer tracking-tight" key={l}>{l}</h5>
					))}
				</div>
				<div className="flex flex-col gap-3 font-bold uppercase text-sm">
					{menus.map((m) => (
						<h5 className="hover:underline cursor-pointer tracking-tight" key={m}>{m}</h5>
					))}
				</div>
				<div className="flex flex-col gap-3 font-bold uppercase text-xs">
					{policiesAndExternalLinks.map((e) => (
						<h5 className="hover:underline cursor-pointer tracking-tight" key={e}>{e}</h5>
					))}
                    <h5 className="cursor-default tracking-tight text-slate-500">@company Name</h5>
				</div>
			</section>
		</footer>
	)
}

export default Footer
