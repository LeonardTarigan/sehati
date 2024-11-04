"use client";

import CardBlog from "@/components/shared/cards/card-blog";
import { Input } from "@/components/shared/input";
import { articles } from "@/lib/static/articles-dummy";
import dayjs from "dayjs";
import { SearchIcon } from "lucide-react";

export default function ArticlesPage() {
  return (
    <main className="space-y-5 px-3 py-5">
      <div className="relative w-full max-w-xl">
        <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-500" />
        <Input
          type="search"
          placeholder="Cari artikel"
          className="w-full rounded-full border bg-white py-6 pl-10 text-sm shadow-sm"
        />
      </div>
      <section className="flex flex-col gap-2">
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
      </section>
    </main>
  );
}
