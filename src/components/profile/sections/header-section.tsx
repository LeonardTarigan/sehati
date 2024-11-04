import { Button } from "@/components/shared/button";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";

export default function HeaderSection() {
  return (
    <section>
      <div className="h-32 bg-gradient-to-t from-primary-500 to-primary-600"></div>
      <div className="flex justify-between px-3">
        <div className="space-y-2">
          <div className="relative -mt-10 size-20 overflow-hidden rounded-full border-4 border-neutral-50 bg-primary-100">
            <Image
              src={
                "https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Profile Picture"
              fill
              objectFit="cover"
            />
          </div>
          <h2 className="text-xl font-bold">Susi Susanti</h2>
        </div>
        <div className="pt-2">
          <Button
            size={"icon"}
            variant={"destructive"}
            className="size-fit p-2"
          >
            <LogOutIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
