import Navbar from "@/components/Navbar"

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className="container mx-auto">
            <Navbar />

            {children}
        </div>
    )
}

export default layout
