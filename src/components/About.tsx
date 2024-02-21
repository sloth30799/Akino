const About = () => {
    const QNA = [
        {
            question: " Nice to meet you. How are you?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum corrupti beatae nam repellendus, repellat ipsa voluptas voluptatem libero ut animi ducimus placeat nihil ea at veritatis ex modi? Qui, mollitia.",
        },
        {
            question: " Nice to meet you. How are you?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum corrupti beatae nam repellendus, repellat ipsa voluptas voluptatem libero ut animi ducimus placeat nihil ea at veritatis ex modi? Qui, mollitia.",
        },
    ]

    return (
        <section className="flex  gap-12 mt-12">
            <div>
                <h6 className="text-sm font-bold text-right border-l-4 pl-3 mr-6 border-black">
                    About
                </h6>
            </div>
            <div>
                <h3 className="text-2fluid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima porro consequatur sapiente voluptates dolorem
                    deleniti. Natus sint praesentium perferendis obcaecati vel
                    laboriosam quaerat fuga aperiam illo ad enim, odio impedit.
                </h3>

                {QNA.map((item, index) => (
                    <div key={index} className="flex gap-12 my-12">
                        <h6 className="text-fluid w-[100px]">| Q.0{index + 1} |</h6>

                        <div>
                            <h6 className="text-fluid">{item.question}</h6>
                            <p className="text-sm">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About
