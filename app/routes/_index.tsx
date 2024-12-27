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
      <div className="grid h-full grid-cols-3 gap-4 p-6 pt-0">
        <section className="flex flex-col h-full col-span-2 gap-6 pl-4">
          <div className="mt-auto">
            <h2 className="text-6xl font-bold font-fascinate first-letter:text-primary">
              Akino
            </h2>
            <span className="text-2xl text-secondary font-fascinate">
              Experience the taste of Japan in every bowl
            </span>
          </div>

          <p className="max-w-[75%]">
            Dive into the rich, authentic flavors of Japan right here in the
            heart of Yangon. At Akino Ramen, we specialize in crafting
            unforgettable bowls of ramen, where every ingredient is carefully
            chosen, and every detail reflects our passion for excellence.
          </p>

          <Button className="w-fit">
            <BookMarkedIcon />
            Book Now
          </Button>

          <div className="flex items-center justify-between gap-24 mt-auto text-xs text-secondary">
            <span className="mt-auto text-xs text-nowrap font-fascinate">
              @2024 / Akino
            </span>

            <div className="overflow-x-auto border-t border-b hide-scrollbar text-nowrap">
              <span className="flex text-sm font-medium select-none gap-x-32 scrolling-banner">
                {BANNER_TEXT.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </span>
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <img
            src={home}
            alt="ramen-image"
            className="max-w-[90%] max-h-[75vh]"
          />
        </section>
      </div>
    </main>
  );
}
