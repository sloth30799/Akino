import { BookOpenText, GalleryVerticalEndIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

const VALUES = [
  "Since 1999, we’ve remained committed to using the finest ingredients and perfecting every bowl to honor the rich tradition of Japanese ramen.",
  "From Tokyo to Yangon, we create warm, welcoming spaces where people connect, celebrate, and enjoy authentic flavors together.",
];

const HISTORY = [
  {
    year: 1999,
    text: "Our journey began in Tokyo, where we mastered the art of traditional ramen, focusing on rich broths and hand-crafted noodles.",
  },
  {
    year: 2004,
    text: "We expanded globally, sharing our passion for authentic Japanese flavors with new communities.",
  },
  {
    year: 2012,
    text: "Innovating beyond tradition, we introduced bold new flavors that captured hearts worldwide.",
  },
  {
    year: 2016,
    text: "We opened in Yangon, bringing the essence of Japan to the city and creating a welcoming space for all ramen lovers.",
  },
];

const About = () => {
  const [activeYear, setActiveYear] = useState(HISTORY[0].year);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="p-4 md:p-8 md:w-full lg:w-[80%] space-y-4 md:space-y-8">
        <section className="grid grid-cols-6 gap-4">
          <h5 className="flex col-span-6 gap-3 mt-1 text-sm md:col-span-2 lg:mt-2 text-primary/75 font-fascinate">
            <BookOpenText size={20} />
            ABOUT US
          </h5>

          <h6 className="col-span-6 text-lg md:col-span-4 lg:text-xl text-primary">
            Join us at Akino Ramen Yangon, we bring authentic Japanese flavors
            to the heart of the city. From rich broths to hand-made noodles,
            every bowl is crafted with care to deliver comfort, taste, and
            tradition.
          </h6>

          <div className="col-span-6 md:col-span-2"></div>
          {VALUES.map((va) => (
            <p className="col-span-3 md:col-span-2" key={va}>
              {va}
            </p>
          ))}
        </section>

        <Separator />

        <section className="grid grid-cols-6 gap-4">
          <h5 className="flex col-span-6 gap-3 mt-4 text-sm md:col-span-2 lg:mt-6 text-primary/75 font-fascinate">
            <GalleryVerticalEndIcon size={20} />
            OUR HISTORY
          </h5>

          <div className="flex items-center col-span-6 gap-2 md:block md:col-span-2 md:space-y-4">
            {HISTORY.map((hy) => (
              <a
                key={hy.year}
                href={`#${hy.year}`}
                className={cn(
                  "text-xl md:text-5xl lg:text-6xl font-fascinate select-none block cursor-pointer hover:text-primary/80 active:text-primary/80",
                  activeYear === hy.year ? "text-primary" : "text-primary/50"
                )}
                onClick={() => setActiveYear(hy.year)}
                onKeyUp={() => setActiveYear(hy.year)}
              >
                {hy.year}
              </a>
            ))}
          </div>

          <div className="flex col-span-6 overflow-auto md:block md:col-span-2 hide-scrollbar scroll-smooth">
            {HISTORY.map((ht) => (
              <div key={ht.text} id={ht.year.toString()} className="min-w-full md:h-full">
                {ht.text}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
