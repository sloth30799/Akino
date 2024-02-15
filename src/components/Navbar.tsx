const Navbar = () => {
  return (
    <nav className="mt-10 flex justify-between items-center">
        <div className="flex gap-6">
            <a href="" className="no-underline text-sm font-medium">overview</a>
            <a href="" className="no-underline text-sm font-medium">index</a>
            <a href="" className="no-underline text-sm font-medium">gallery</a>
        </div>

        <h4 className="tracking-logo font-bold">GOOD DESIGN</h4>

        <div className="flex gap-6">
            <a href="" className="no-underline text-sm font-medium">about</a>
            <a href="" className="no-underline text-sm font-medium">shop</a>
        </div>
    </nav>
  )
}

export default Navbar