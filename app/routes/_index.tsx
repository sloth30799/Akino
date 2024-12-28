import type { MetaFunction } from "@remix-run/node";
import { BookMarkedIcon } from "lucide-react";
import home from "~/assets/home.jfif";
import Header from "~/components/layout/Header";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Akino" },
    { name: "description", content: "Welcome to Akino!" },
  ];
};

const BANNER_TEXT = [
  "いらっしゃいませ",
  "本物の味わいを楽しむ",
  "さあ、一緒に味わいましょう！",
  "心を込めて作ったラーメン",
];

export default function Index() {
  return (
    <main className="flex flex-col h-screen">
      <Header />

      <div className="grid h-full grid-cols-1 gap-4 p-2 pt-4 md:p-6 md:grid-cols-3">
        <section className="flex items-center justify-center order-1 md:justify-start md:order-3">
          <img
            src={home}
            alt="ramen-image"
            className="max-w-[90%] max-h-[75vh]"
          />
        </section>

        <section className="flex flex-col order-2 h-full col-span-2 gap-6 pl-4 md:order-1">
          <div className="mt-auto">
            <h2 className="text-5xl font-bold lg:text-6xl font-fascinate first-letter:text-primary">
              Akino
            </h2>
            <span className="text-xl lg:text-2xl text-secondary font-fascinate">
              Experience the taste of Japan in every bowl
            </span>
          </div>

          <p className="max-w-[75%] text-sm lg:text-base">
            Dive into the rich, authentic flavors of Japan right here in the
            heart of Yangon. At Akino Ramen, we specialize in crafting
            unforgettable bowls of ramen, where every ingredient is carefully
            chosen, and every detail reflects our passion for excellence.
          </p>

          <Button className="w-fit">
            <BookMarkedIcon />
            Book Now
          </Button>

          <div className="flex flex-col items-center justify-between gap-4 pb-4 mt-auto text-xs md:gap-24 md:flex-row text-secondary">
            <div className="max-w-full overflow-x-auto border-t border-b md:order-2 hide-scrollbar text-nowrap">
              <span className="flex text-sm font-medium select-none gap-x-32 scrolling-banner">
                {BANNER_TEXT.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </span>
            </div>
            
            <span className="text-xs md:order-1 text-nowrap font-fascinate">
              @2024 / Akino
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
