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
      <div className="space-y-4 rounded-xl bg-white p-4 shadow transition-all duration-150 hover:bg-neutral-50">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
          <Image src={img_url} alt={title} fill className="object-cover" />
        </div>
        <div>
          <h3 className="line-clamp-2 font-semibold">{title}</h3>
          <div className="mt-5 flex items-center justify-between gap-5 text-sm font-medium text-neutral-400">
            <p className="line-clamp-1">{author}</p>
            <p className="whitespace-nowrap">{created_at}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
