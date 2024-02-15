type sideBarProps = {
    content: string[]
    changeContent: (i: number) => void
    activeContent: number
}

const Sidebar = ({ content, changeContent, activeContent }: sideBarProps) => {
    const contentStyle = `text-2fluid mb-1 tracking-wide font-medium cursor-pointer`

    return (
        <aside>
            {content.map((c, i) => (
                <div
                    className={`${contentStyle} ${
                        activeContent === i
                            ? "text-black border-l-4 border-black pl-[12px]"
                            : "pl-4 text-gray-300 hover:text-gray-400"
                    }`}
                    key={c}
                    onClick={() => changeContent(i)}
                >
                    {c}
                </div>
            ))}
        </aside>
    )
}

export default Sidebar
