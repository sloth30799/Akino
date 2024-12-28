import { Utensils } from "lucide-react";

const MENUS = [
  {
    title: "Ramen Bowls",
    items: [
      {
        name: "Shoyu Ramen",
        description:
          "Soy-based broth with tender chashu pork, marinated egg, bamboo shoots, and nori.",
      },
      {
        name: "Miso Ramen",
        description:
          "Rich miso broth with ground pork, corn, green onions, and butter.",
      },
      {
        name: "Tonkotsu Ramen",
        description:
          "Creamy pork bone broth with chashu, black garlic oil, and soft-boiled egg.",
      },
      {
        name: "Vegetarian Ramen",
        description:
          "Light vegetable broth with tofu, seasonal greens, and miso-marinated mushrooms.",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Gyoza",
        description: "Pan-fried dumplings filled with pork and vegetables.",
      },
      {
        name: "Edamame",
        description: "Lightly salted steamed soybeans.",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Japanese Green Tea",
        description: "",
      },
      {
        name: "Soft Drinks",
        description: "",
      },
    ],
  },
];

const menu = () => {
  return (
    <div className="flex flex-col p-4 items-center justify-center gap-10 text-center max-w-[600px] min-h-screen mx-auto">
      <h2 className="flex items-center gap-3 text-2xl font-fascinate">
        <Utensils size={20}  />
        MENU
        <Utensils size={20} className="transform scale-x-[-1]" />
      </h2>
      {MENUS.map((menu) => (
        <div key={menu.title} className="space-y-2">
          <h4 className="text-xl font-bold font-fascinate text-primary">
            {menu.title}
          </h4>
          {menu.items.map((item) => (
            <div key={item.name}>
              <h5 className="text-primary">{item.name}</h5>
              <p>{item?.description ?? null}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default menu;
