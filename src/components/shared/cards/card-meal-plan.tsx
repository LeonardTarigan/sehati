import { formatToRupiah } from "@/lib/utils";
import Image from "next/image";

interface ICardMealPlan {
  name: string;
  calories: number;
  price_least: number;
  price_most: number;
  img_url: string;
}

export default function CardMealPlan({
  calories,
  name,
  img_url,
  price_least,
  price_most,
}: ICardMealPlan) {
  return (
    <div className="h-full w-full space-y-4 rounded-xl bg-white p-3 shadow">
      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg bg-neutral-100">
        <Image src={img_url} alt={name} fill className="object-cover" />
      </div>
      <div className="">
        <h3 className="line-clamp-1 font-semibold">{name}</h3>
        <p className="text-sm font-medium text-neutral-400">{calories} kkal</p>
        <div className="mt-2 text-xs font-medium text-neutral-400">
          {formatToRupiah(price_least)} - {formatToRupiah(price_most)}
        </div>
      </div>
    </div>
  );
}
