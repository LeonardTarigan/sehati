import { formatToRupiah } from "@/lib/utils";
import Image from "next/image";

interface IMealCard {
  img_url: string;
  name: string;
  price_min: number;
  price_max: number;
  nutrition: (string | number)[][];
}

export default function MealCard({
  img_url,
  name,
  nutrition,
  price_max,
  price_min,
}: IMealCard) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-3 shadow">
      <div className="relative aspect-video w-full basis-1/3 overflow-hidden rounded-lg bg-neutral-100">
        <Image src={img_url} alt={name} fill className="object-cover" />
      </div>
      <div className="flex grow flex-col justify-between gap-5 text-sm">
        <div>
          <h3 className="text-base font-semibold">{name}</h3>
          <p>
            {formatToRupiah(price_min)} - {formatToRupiah(price_max)}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-neutral-400">
          {nutrition.map((nutrition, index) => (
            <div key={index}>
              <h4 className="text-xs capitalize">{nutrition[0]}</h4>
              <p className="font-semibold">
                {nutrition[1]} {nutrition[2]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
