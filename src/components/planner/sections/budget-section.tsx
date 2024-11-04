import { Button } from "@/components/shared/button";
import { Edit2Icon } from "lucide-react";

export default function BudgetSection() {
  return (
    <section className="px-3">
      <div className="-mt-20 space-y-5 rounded-xl bg-white p-5 shadow">
        <div className="flex items-center justify-between gap-5">
          <h2 className="font-semibold">Budget Harian</h2>
          <Button size={"icon"} className="rounded-full">
            <Edit2Icon />
          </Button>
        </div>
        <p className="text-2xl font-bold">Rp 60.000</p>
      </div>
    </section>
  );
}
