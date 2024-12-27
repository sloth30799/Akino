import { BookMarkedIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const contact = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-32px)] border rounded-lg m-4 p-3">
      <section className="min-h-[40px]">
        <a
          href="https://www.google.com/maps"
          className="flex items-center justify-center gap-1 font-medium cursor-pointer hover:underline active:underline"
        >
          <MapPin size={16} />
          Location
        </a>
      </section>

      <section className="flex flex-col items-center justify-center h-full gap-4 p-4">
        <h4 className="flex items-center gap-3 font-fascinate">
          <BookMarkedIcon size={24} /> Reservations
        </h4>
        <h5 className="text-2xl font-black text-primary">
          Book Your Table Today!
        </h5>

        <p className="max-w-[520px] text-center">
          {
            "Reserve your spot today to experience our authentic ramen bowls, crafted with rich, savory broths, perfectly cooked noodles, and fresh ingredients."
          }
        </p>

        <div className="max-w-[400px] w-full space-y-4">
          <Input className="border-secondary" placeholder="Name" />
          <Input className="border-secondary" placeholder="Date / Time" />
          <Input className="border-secondary" placeholder="Phone Number" />
        </div>

        <Button>Submit</Button>
      </section>

      <section className="flex items-center justify-between gap-3">
        <h6 className="font-bold text-primary">Call Us</h6>
        <span className="flex items-center gap-3 cursor-pointer hover:underline active:underline">
          <PhoneCallIcon size={16} />
          <p className="text-sm ">09-123 4567 89</p>
        </span>
      </section>
    </div>
  );
};

export default contact;
