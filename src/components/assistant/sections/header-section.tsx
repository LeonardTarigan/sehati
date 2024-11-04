import { Button } from "@/components/shared/button";
import LogoColored from "@/components/shared/svg/logo-colored";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <header className="relative flex grow-0 items-center justify-center bg-white py-3">
      <div className="flex items-center gap-2 text-xl font-bold text-primary-500">
        <LogoColored className="size-10" />
        <h2>Asisten Sehat</h2>
      </div>
      <Link href={"/"} className="absolute left-3">
        <Button size={"icon"} variant={"ghost"} className="size-fit">
          <ChevronLeftIcon className="!size-7 text-primary-500" />
        </Button>
      </Link>
    </header>
  );
}
