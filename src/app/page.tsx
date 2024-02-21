import About from "@/components/About"
import Hero from "@/components/Hero"
import Menus from "@/components/Menus"
import Navbar from "@/components/Navbar"

const Page = () => {
    return (
        <section className="container mx-auto">
            <Navbar />

            <Hero />

            <About />

            <Menus />
        </section>
    )
}

export default Page
