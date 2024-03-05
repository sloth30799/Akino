import About from "@/components/About"
import Hero from "@/components/Hero"
import Menus from "@/components/Menus"
import Navbar from "@/components/Navbar"
import Footer from "../components/Footer"
import Milestones from "@/components/Milestones"

const Page = () => {
    return (
        <section className="container mx-auto">
            <Navbar />

            <Hero />

            <About />

            <Menus />

            <Milestones />

            <Footer />
        </section>
    )
}

export default Page
