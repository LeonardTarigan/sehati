import { cn } from "@/lib/utils";

interface ICardHealthStat {
  title: string;
  content: string;
  condition: "danger" | "normal" | "warning";
  className?: string;
}

export default function HealthStatCard({
  title,
  content,
  condition,
  className,
}: ICardHealthStat) {
  let colorSet = "bg-white text-black";

  switch (condition) {
    case "danger":
      colorSet = "text-rose-600 bg-rose-50";
      break;
    case "normal":
      colorSet = "text-primary-600 bg-primary-50";
      break;
    case "warning":
      colorSet = "text-amber-600 bg-amber-50";
      break;
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-xl p-3 text-center sm:aspect-square",
        colorSet,
        className,
      )}
    >
      <h3 className="text-sm">{title}</h3>
      <div className="flex grow items-center justify-center">
        <p className="text-2xl font-bold">{content}</p>
      </div>
    </div>
  );
}
