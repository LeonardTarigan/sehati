import { Button } from "@/components/shared/button";
import CardBlog from "@/components/shared/cards/card-blog";
import { articles } from "@/lib/static/articles-dummy";
import dayjs from "dayjs";
import Link from "next/link";

export default function ArticlesSection() {
  return (
    <section className="space-y-2 px-3 py-5">
      <div className="flex items-center justify-between gap-5">
        <h2 className="text-xl font-bold">Artikel Terkait</h2>
        <Link href={"/articles"}>
          <Button variant={"outline"}>Selengkapnya</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {articles.map(({ id, img_url, author, created_at, title }) => (
          <CardBlog
            key={id}
            {...{
              id,
              img_url,
              author,
              title,
              created_at: dayjs(created_at).fromNow(),
            }}
          />
        ))}
      </div>
    </section>
  );
}
