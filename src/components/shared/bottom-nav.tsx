import {
  BotIcon,
  CircleUserRoundIcon,
  HomeIcon,
  LaptopMinimalIcon,
  RouteIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 z-40 mx-auto flex w-full max-w-md justify-around bg-white px-5 py-2 font-semibold">
      <Link
        href={"/"}
        className={`flex flex-col items-center rounded-md px-2 text-[10px] ${pathname === "/" ? "text-primary-500" : "text-neutral-400"}`}
      >
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link
        href={"/blog"}
        className={`flex flex-col items-center rounded-md px-2 text-[10px] ${pathname === "/blog" ? "text-primary-500" : "text-neutral-400"}`}
      >
        <LaptopMinimalIcon />
        <span>Blog</span>
      </Link>
      <Link
        href={"/assistanr"}
        className={`-mt-10 flex h-fit flex-col items-center rounded-full bg-primary-500 p-3 text-[10px] text-white`}
      >
        <BotIcon size={30} />
      </Link>
      <Link
        href={"/planner"}
        className={`flex flex-col items-center rounded-md px-2 text-[10px] ${pathname === "/planner" ? "text-primary-500" : "text-neutral-400"}`}
      >
        <RouteIcon />
        <span>Plan</span>
      </Link>
      <Link
        href={"/profile"}
        className={`flex flex-col items-center rounded-md px-2 text-[10px] ${pathname === "/profile" ? "text-primary-500" : "text-neutral-400"}`}
      >
        <CircleUserRoundIcon />
        <span>Profil</span>
      </Link>
    </nav>
  );
}
