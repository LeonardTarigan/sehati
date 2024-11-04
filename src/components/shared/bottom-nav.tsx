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

  if (pathname === "/assistant") return;

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
        href={"/articles"}
        className={`flex flex-col items-center rounded-md px-2 text-[10px] ${pathname === "/articles" ? "text-primary-500" : "text-neutral-400"}`}
      >
        <LaptopMinimalIcon />
        <span>Blog</span>
      </Link>
      <Link
        href={"/assistant"}
        className={`flex h-fit flex-col items-center rounded-full border-white bg-primary-500 text-[10px] text-white transition-colors duration-150 hover:bg-primary-600 ${pathname === "/assistant" ? "p-2" : "-mt-10 border-8 p-3"}`}
      >
        <BotIcon size={pathname === "/assistant" ? 20 : 30} />
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
