import { CalendarIcon, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ICardBlog {
  id: number;
  img_url: string;
  title: string;
  author: string;
  created_at: string;
}

export default function CardBlog({
  id,
  img_url,
  author,
  created_at,
  title,
}: ICardBlog) {
  return (
    <Link href={`/articles/${id}`}>
      <div className="flex gap-2 rounded-xl bg-white p-4 shadow transition-all duration-150 hover:bg-neutral-50">
        <div className="relative aspect-[5/4] basis-1/3 overflow-hidden rounded-lg bg-neutral-100">
          <Image src={img_url} alt={title} fill className="object-cover" />
        </div>
        <div className="flex basis-2/3 flex-col justify-between gap-3">
          <h3 className="line-clamp-2 font-semibold">{title}</h3>
          <div className="flex flex-col gap-1 text-xs font-medium text-neutral-400">
            <div className="flex items-center gap-1">
              <User2Icon size={15} />
              <p className="">{author}</p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon size={15} />
              <p className="line-clamp-1">{created_at}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
